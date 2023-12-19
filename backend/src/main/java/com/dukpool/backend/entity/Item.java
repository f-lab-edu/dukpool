package com.dukpool.backend.entity;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Item {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long itemID;

  @Column(length = 100, nullable = false)
  private String name;

  private String title;
  private String content;
  private String mediaUrl; // 이미지나 동영상 URL
  private String salesLink; // 상품 판매 링크
  private boolean salesRequest; // 판매 요청 여부

  @ManyToMany private Set<Tag> tags = new HashSet<>();

  @ManyToOne private User user; // 아이템을 올린 사용자

  // 관리자 승인 여부를 위한 필드
  private boolean approvedByAdmin = false;
  private String description;
  private Integer followCount = 0;

  // 관리자 승인 여부를 설정하는 메서드
  public void setApprovedByAdmin(boolean approved) {
    this.approvedByAdmin = approved;
  }

}
