package com.dukpool.backend.snsLogin;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import javax.servlet.http.HttpServletResponse;
import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Getter
@RestController
@RequestMapping("/")
public class KakaoApi {

  private final Logger logger = LoggerFactory.getLogger(this.getClass());

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

  @GetMapping("/auth/kakao/callback")
  public String kakaoCallback(@RequestParam("code") String code) throws Exception {
    // 인가 코드를 사용하여 액세스 토큰 요청
      logger.info("kakaoCallback method");
      logger.info("kakaoCallback code : ",code);

    return getAccessToken(code);
  }

  public String getAccessToken(String code) {
      logger.info("getAccessToken method & code :", code);
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
    return accessToken;
  }

  public HashMap<String, Object> getUserInfo(String accessToken) {
    HashMap<String, Object> userInfo = new HashMap<>();
    String reqUrl = "https://kapi.kakao.com/v2/user/me";
    try {
      URL url = new URL(reqUrl);
      HttpURLConnection conn = (HttpURLConnection) url.openConnection();
      conn.setRequestMethod("POST");
      conn.setRequestProperty("Authorization", "Bearer " + accessToken);
      conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

      int responseCode = conn.getResponseCode();
      logger.info("[KakaoApi.getUserInfo] responseCode : {}", responseCode);

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

      JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
      JsonObject kakaoAccount = element.getAsJsonObject().get("kakao_account").getAsJsonObject();

      String nickname = properties.getAsJsonObject().get("nickname").getAsString();
      String email = kakaoAccount.getAsJsonObject().get("email").getAsString();

      userInfo.put("nickname", nickname);
      userInfo.put("email", email);

      br.close();

    } catch (Exception e) {
      e.printStackTrace();
    }
    return userInfo;
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
