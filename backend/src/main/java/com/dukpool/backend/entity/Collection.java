package com.dukpool.backend.entity;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Collection {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    private User user; // 컬렉션을 소유한 사용자

  @ManyToMany private Set<Item> items = new HashSet<>(); // 컬렉션에 포함된 아이템들

    // 기타 필드 및 생성자, getter, setter
}
