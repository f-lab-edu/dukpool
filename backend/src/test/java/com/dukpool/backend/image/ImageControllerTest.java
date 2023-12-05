package com.dukpool.backend.image;

import com.dukpool.backend.Repository.ImageRepository;
import com.dukpool.backend.entity.Image;
import com.dukpool.backend.utill.utility;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;
import static org.assertj.core.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockMultipartFile;

@SpringBootTest
public class ImageControllerTest {

  private final Logger logger = LoggerFactory.getLogger(this.getClass());

  @Autowired private ImageRepository imageRepository;

  @Test
  // public void handleFileUpload(@RequestParam("image") MultipartFile file) {
  public void ImageUploadAPI() {
    byte[] imageBytes = new byte[] {(byte) 0x89, 'P', 'N', 'G', 0x0D, 0x0A, 0x1A, 0x0A, 0x00};

    MockMultipartFile mockFile =
        new MockMultipartFile(
            "image", // form의 파라미터 이름
            "이미지 업로드 테스트.jpg", // 파일의 이름
            "image/jpeg", // 파일의 타입
            imageBytes // 파일의 내용
            );
    UUID one = UUID.randomUUID();
    String originalFileName = mockFile.getOriginalFilename();
    String fileNameUUID = one.toString();
    String uploadDir = "/Users/kyj/test/"; // 실제 경로로 변경 필요
    Image image = new Image();
    File saveFile = new File(uploadDir + fileNameUUID + ".jpg");

    logger.info("테스트 실행");

    Path path = Paths.get(uploadDir + fileNameUUID + ".jpg");
    try {
      saveFile.createNewFile();
      assertThat(saveFile).as("파일 생성 여부").isFile();
      logger.info("파일 생성 1");
    } catch (IOException e) {
      logger.info(e.toString());
    }
    try (FileOutputStream fos = new FileOutputStream(path.toString())) {
      fos.write(mockFile.getBytes());
      image.setFilepath(uploadDir);
      image.setFilename(originalFileName);
      image.setExtension(utility.extractExtension(originalFileName));
      image.setUuid(one.toString());
      imageRepository.save(image);
      assertThat(saveFile).as("파일 존재 여부").exists();
      logger.info("파일 업로드 성공");
    } catch (Exception e) {
      logger.info(e + "  파일 업로드 실패");
    }
  }
}
