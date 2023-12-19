package com.dukpool.backend.entity;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
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

    private String photoUrl; // 사진 URL을 저장

    @ManyToMany private Set<Tag> tags = new HashSet<>();

    @Column(length = 100, nullable = false)
    private String author;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // 생성자, 게터, 세터
}

