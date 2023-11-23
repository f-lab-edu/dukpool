package com.dukpool.backend.entity;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attendanceID;

    @ManyToOne
    @JoinColumn(name = "userID", nullable = false)
    private User user;

    private LocalDate date;
    private Boolean checkedIn = false;

    // 생성자, 게터, 세터
}
