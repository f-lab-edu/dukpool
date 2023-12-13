package com.dukpool.backend.user;

import com.dukpool.backend.Repository.UserRepository;
import com.dukpool.backend.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void registerUser(User user) {
        if(user.getEmail() == null || user.getEmail().isEmpty()) {
            throw new IllegalArgumentException("이메일은 필수입니다.");
        }
        if(user.getUsername() == null || user.getUsername().isEmpty()) {
            throw new IllegalArgumentException("이름은 필수입니다.");
        }
        if(user.getPassword() == null || user.getPassword().isEmpty()) {
            throw new IllegalArgumentException("비밀번호는 필수입니다.");
        }

        // 비밀번호 해싱
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        userRepository.save(user);
    }
}
