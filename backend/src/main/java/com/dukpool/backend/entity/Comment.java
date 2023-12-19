package com.dukpool.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String content;

    @ManyToOne
    private Post post; // 해당 댓글이 속한 글

    private boolean isHelpful; // 도움이 되는 댓글인지 여부
    private boolean isSelected; // 채택된 댓글인지 여부

    // 기타 필드 및 생성자, getter, setter
}
