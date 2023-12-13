package com.dukpool.backend.user;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import com.dukpool.backend.Repository.UserRepository;
import com.dukpool.backend.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    private User user;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        user = new User();
    }

//    @Test
//    public void registerUser_Success() {
//        when(userRepository.save(any(User.class))).thenReturn(user);
//
//        User savedUser = userService.registerUser(user);
//
//        assertNotNull(savedUser);
//        assertEquals(user.getEmail(), savedUser.getEmail());
//    }

    // 추가적인 테스트 케이스 (예: 데이터 유효성 검사 실패, 예외 처리 등)
}
