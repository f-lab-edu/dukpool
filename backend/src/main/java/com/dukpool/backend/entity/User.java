package com.dukpool.backend.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String username;

    @Column(length = 30)
    private String password;

    @Column(length = 100)
    private String email;

    @Column(length = 20)
    private String phone;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Image> images;

    @Enumerated(EnumType.STRING)
    private SnsProvider snsProvider; // SNS 공급자

    @Column(unique = true)
    private Long snsId; // SNS 공급자에서 제공하는 고유 ID

    private Character gender;
    private LocalDateTime createdAt;
    private String address1;
    private String address2;
    private LocalDate birthday;
    private Boolean isActive = true;
}