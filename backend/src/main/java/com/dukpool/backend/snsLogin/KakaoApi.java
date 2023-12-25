package com.dukpool.backend.snsLogin;

import com.dukpool.backend.Repository.UserRepository;
import com.dukpool.backend.entity.SnsProvider;
import com.dukpool.backend.entity.User;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import javax.servlet.http.HttpServletResponse;
import lombok.Getter;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Getter
@RestController
@RequestMapping("/")
public class KakaoApi {

  private final Logger logger = LoggerFactory.getLogger(this.getClass());

  @Autowired UserRepository userRepository;

  private final String REST_API_KEY = "a8151e5b46735e92c0a052f581c885dc"; // 카카오 앱의 클라이언트 ID
  private final String REDIRECT_URI =
      "http://test.dukpool.com:8080/auth/kakao/callback"; // 카카오 앱에 설정된 리디렉션 URI

  public String getREST_API_KEY() {
    return REST_API_KEY;
  }

  public String getREDIRECT_URI() {
    return REDIRECT_URI;
  }

  @RequestMapping("/login/kakao")
  public void getKakaoLoginUrl(HttpServletResponse response) {
    try {
      String kakaoUrl =
          "https://kauth.kakao.com/oauth/authorize?client_id="
              + REST_API_KEY
              + "&redirect_uri="
              + URLEncoder.encode(REDIRECT_URI, "UTF-8")
              + "&response_type=code";
      response.sendRedirect(kakaoUrl);
      logger.info("sendRedirect");
    } catch (IOException e) {
      logger.info("sendRedirect error = ", e);
    }
  }

  @PostMapping("/auth/kakao/callback")
  public void kakaoCallback(@RequestParam("code") String code) throws Exception {
    // 인가 코드를 사용하여 액세스 토큰 요청
    logger.info("kakaoCallback method");
    logger.info("kakaoCallback code : ", code.toString());

    getAccessToken(code);
  }

  public void getAccessToken(String code) {
    logger.info("getAccessToken method & code :", code.toString());
    String accessToken = "";
    String refreshToken = "";
    String reqUrl = "https://kauth.kakao.com/oauth/token";

    try {
      URL url = new URL(reqUrl);
      HttpURLConnection conn = (HttpURLConnection) url.openConnection();

      // 필수 헤더 세팅
      conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
      conn.setDoOutput(true); // OutputStream으로 POST 데이터를 넘겨주겠다는 옵션.

      BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
      StringBuilder sb = new StringBuilder();

      // 필수 쿼리 파라미터 세팅
      sb.append("grant_type=authorization_code");
      sb.append("&client_id=").append(REST_API_KEY);
      sb.append("&redirect_uri=").append(REDIRECT_URI);
      sb.append("&code=").append(code);

      bw.write(sb.toString());
      bw.flush();

      int responseCode = conn.getResponseCode();
      logger.info("[KakaoApi.getAccessToken] responseCode = {}", responseCode);

      BufferedReader br;
      if (responseCode >= 200 && responseCode <= 300) {
        br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
      } else {
        br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
      }

      String line = "";
      StringBuilder responseSb = new StringBuilder();
      while ((line = br.readLine()) != null) {
        responseSb.append(line);
      }
      String result = responseSb.toString();
      logger.info("responseBody = {}", result);

      JsonParser parser = new JsonParser();
      JsonElement element = parser.parse(result);
      accessToken = element.getAsJsonObject().get("access_token").getAsString();
      refreshToken = element.getAsJsonObject().get("refresh_token").getAsString();

      br.close();
      bw.close();
    } catch (Exception e) {
      e.printStackTrace();
    }
    // return accessToken;
    JSONObject userInfo = fetchKakaoUserInfo(accessToken);
    System.out.println(userInfo.toString());
    processLoginOrSignup(userInfo);
  }

  public JSONObject fetchKakaoUserInfo(String accessToken) {
    String requestUrl = "https://kapi.kakao.com/v2/user/me";
    JSONObject userInfo = null;

    try {
      URL url = new URL(requestUrl);
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();

      connection.setRequestMethod("GET");
      connection.setRequestProperty("Authorization", "Bearer " + accessToken);

      int responseCode = connection.getResponseCode();
      BufferedReader reader;
      if (responseCode == 200) {
        reader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
      } else {
        reader = new BufferedReader(new InputStreamReader(connection.getErrorStream()));
      }

      String line;
      StringBuilder response = new StringBuilder();
      while ((line = reader.readLine()) != null) {
        response.append(line);
      }
      reader.close();

      userInfo = new JSONObject(response.toString());
    } catch (Exception e) {
      e.printStackTrace();
    }

    return userInfo;
  }

  public User processLoginOrSignup(JSONObject userInfo) {
    // JSONObject userInfo = fetchKakaoUserInfo(accessToken);
    User user = new User();
    if (userInfo != null) {

      System.out.println("User ID: " + userInfo.getLong("id"));
      if (userRepository.existsBySnsIdAndSnsProvider(userInfo.getLong("id"), SnsProvider.KAKAO)) {
        user = userRepository.findBySnsIdAndSnsProvider(userInfo.getLong("id"), SnsProvider.KAKAO);

        logger.info("kakao user Object found :", user.toString());
      } else {

        user.setSnsId(userInfo.getLong("id"));
        user.setSnsProvider(SnsProvider.KAKAO);
        JSONObject kakaoAccountObj = userInfo.getJSONObject ("kakao_account");
        JSONObject nickNameObj = kakaoAccountObj.getJSONObject ("profile");
        user.setUsername (nickNameObj.getString ("nickname"));
        userRepository.save(user);

        logger.info("kakao user Object saved :", user.toString());
      }

      return user;
    } else {
      System.out.println("Kakao user information could not be retrieved.");
      user = null;
      return user;
    }
  }

  @RequestMapping("logout/kakao")
  public void kakaoLogout(String accessToken) {
    String reqUrl = "https://kapi.kakao.com/v1/user/logout";

    try {
      URL url = new URL(reqUrl);
      HttpURLConnection conn = (HttpURLConnection) url.openConnection();
      conn.setRequestMethod("POST");
      conn.setRequestProperty("Authorization", "Bearer " + accessToken);

      int responseCode = conn.getResponseCode();
      logger.info("[KakaoApi.kakaoLogout] responseCode : {}", responseCode);

      BufferedReader br;
      if (responseCode >= 200 && responseCode <= 300) {
        br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
      } else {
        br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
      }

      String line = "";
      StringBuilder responseSb = new StringBuilder();
      while ((line = br.readLine()) != null) {
        responseSb.append(line);
      }
      String result = responseSb.toString();
      logger.info("kakao logout - responseBody = {}", result);

    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
