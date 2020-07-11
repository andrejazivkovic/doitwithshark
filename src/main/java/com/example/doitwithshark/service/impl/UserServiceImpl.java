package com.example.doitwithshark.service.impl;

import com.example.doitwithshark.model.User;
import com.example.doitwithshark.repository.UserRepository;
import com.example.doitwithshark.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public Optional<User> findById(String id) {
        return this.userRepository.findById(id);
    }

    @Override
    public List<User> findAll() {
        return this.userRepository.findAll();
    }

    @Override
    public void deleteById(String id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        this.userRepository.deleteAll();
    }

    @Override
    public long count() {
        return this.userRepository.count();
    }

    @Override
    public void update(User user) {
        this.userRepository.save(user);
    }

    @Override
    public User findByUsername(String username, String password) {
        User user = this.userRepository.findByUsername(username);
        return user;
    }
}
