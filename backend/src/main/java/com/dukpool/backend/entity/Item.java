package com.dukpool.backend.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemID;

    @Column(length = 100, nullable = false)
    private String name;

    private String description;
    private Integer followCount = 0;

    // 생성자, 게터, 세터
}
