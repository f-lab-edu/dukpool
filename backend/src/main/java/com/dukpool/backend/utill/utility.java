package com.dukpool.backend.utill;

public class utility {

  public static String extractExtension(String fileName) {
    // 마지막 점('.')의 위치를 찾습니다.
    int dotIndex = fileName.lastIndexOf('.');

    // 점이 없거나 파일명의 마지막에 위치한 경우는 확장자가 없는 것으로 간주합니다.
    if (dotIndex == -1 || dotIndex == fileName.length() - 1) {
      return ""; // 확장자가 없습니다.
    }
정
    // 점 이후의 문자열을 반환합니다.
    return fileName.substring(dotIndex + 1);
  }
}
