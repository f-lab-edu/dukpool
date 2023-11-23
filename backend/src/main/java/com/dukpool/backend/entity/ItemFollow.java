package com.dukpool.backend.entity;

import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class ItemFollow {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long followID;

    @ManyToOne
    @JoinColumn(name = "userID")
    private User user;

    @ManyToOne
    @JoinColumn(name = "itemID")
    private Item item;

    private LocalDateTime followedAt;

    // 생성자, 게터, 세터
}
