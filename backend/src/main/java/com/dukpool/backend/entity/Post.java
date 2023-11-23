package com.dukpool.backend.entity;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;


@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postID;

    @ManyToOne
    @JoinColumn(name = "categoryID")
    private Category category;

    @Column(length = 200, nullable = false)
    private String title;

    @Lob
    private String content;

    @Column(length = 100, nullable = false)
    private String author;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // 생성자, 게터, 세터
}

