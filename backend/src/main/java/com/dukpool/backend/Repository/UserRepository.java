package com.dukpool.backend.Repository;

import com.dukpool.backend.entity.SnsProvider;
import com.dukpool.backend.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    boolean existsBySnsIdAndSnsProvider(Long snsId, SnsProvider snsProvider);
    User findBySnsIdAndSnsProvider(Long snsId, SnsProvider snsProvider);
}
