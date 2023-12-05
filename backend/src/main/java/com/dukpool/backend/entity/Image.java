package com.dukpool.backend.entity;

import java.time.LocalDateTime;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Image {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long imageID;

  @ManyToOne
  @JoinColumn(name = "userID")
  private User user;

  @Column(length = 255, nullable = false)
  private String filename;

  @Column(length = 10, nullable = false)
  private String extension;

  @Column(length = 255, nullable = false)
  private String filepath;

  @Column(length = 36, nullable = false)
  private String uuid;

  @PrePersist
  protected void onCreate() {
    uploadedAt = LocalDateTime.now();
  }

  private LocalDateTime uploadedAt;

  // 생성자, 게터, 세터
}
