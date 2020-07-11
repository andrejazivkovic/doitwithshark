package com.example.doitwithshark.service;

import com.example.doitwithshark.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    public User save(User user);
    public Optional<User> findById(String id);
    public List<User> findAll();
    public void deleteById(String id);
    public void deleteAll();
    public long count();
    public void update(User user);
    public User findByUsername(String username, String password);
}
