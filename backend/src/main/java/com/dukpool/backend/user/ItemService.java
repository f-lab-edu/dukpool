package com.dukpool.backend.user;

import com.dukpool.backend.Repository.ItemRepository;
import com.dukpool.backend.entity.Item;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;
    // 관리자가 아이템을 승인하는 메서드
    public void approveItem(Long itemId) {
        Item item = itemRepository.findById(itemId)
            .orElseThrow(() -> new IllegalArgumentException("아이템을 찾을 수 없습니다."));

        item.setApprovedByAdmin(true);
        itemRepository.save(item);
    }

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    public Optional<Item> getItemById(Long id) {
        return itemRepository.findById(id);
    }

    public Item saveItem(Item item) {
        return itemRepository.save(item);
    }

    public void deleteItem(Long id) {
        itemRepository.deleteById(id);
    }

    // 기타 메서드
}
