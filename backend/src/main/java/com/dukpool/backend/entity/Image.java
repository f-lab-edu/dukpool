package com.dukpool.backend.entity;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
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

    private LocalDateTime uploadedAt;

    // 생성자, 게터, 세터
}

