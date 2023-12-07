package com.dukpool.backend.API;

import com.dukpool.backend.Repository.ImageRepository;
import com.dukpool.backend.entity.Image;
import com.dukpool.backend.utill.utility;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class ImageController {

  private final Logger logger = LoggerFactory.getLogger(this.getClass());
  private ImageRepository imageRepository;

  @PostMapping("/upload")
  public void handleFileUpload(@RequestParam("image") MultipartFile file) {
    // 파일 저장 로직

    UUID one = UUID.randomUUID();
    String originalFileName = file.getOriginalFilename();
    String extString = utility.extractExtension(originalFileName);
    String fileNameUUID = one.toString();
    String uploadDir = "/home/ubuntu/dukpool/images/"; // 실제 경로로 변경 필요
    Image image = new Image();
    File saveFile = new File(uploadDir + fileNameUUID + extString);

    Path path = Paths.get(uploadDir + fileNameUUID + extString);
    try {
      saveFile.createNewFile();
      logger.info("파일 생성");
    } catch (IOException e) {
      logger.info(e.toString());
    }
    try (FileOutputStream fos = new FileOutputStream(path.toString())) {
      fos.write(file.getBytes());
      image.setFilepath(uploadDir);
      image.setFilename(originalFileName);
      image.setExtension(utility.extractExtension(originalFileName));
      image.setUuid(one.toString());
      imageRepository.save(image);
      logger.info("파일저장 성공");
    } catch (Exception e) {
      logger.info("파일저장 실패");
    }
  }
}
