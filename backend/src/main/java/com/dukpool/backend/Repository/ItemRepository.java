package com.dukpool.backend.Repository;

import com.dukpool.backend.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    // 사용자 ID에 따른 아이템 목록 조회
    List<Item> findByUserId(Long userId);

    // 관리자 승인 여부에 따른 아이템 목록 조회
    List<Item> findByApprovedByAdmin(boolean approved);

    // 추가적인 커스텀 메서드가 필요한 경우 여기에 정의
}
