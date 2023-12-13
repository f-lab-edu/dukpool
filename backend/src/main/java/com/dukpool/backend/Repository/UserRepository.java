package com.dukpool.backend.Repository;

import com.dukpool.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // 필요한 경우 추가적인 메서드 정의
}
