package com.example.doitwithshark.rest;

import com.example.doitwithshark.model.User;
import com.example.doitwithshark.model.UserAuth;
import com.example.doitwithshark.service.UserService;
import javassist.tools.rmi.ObjectNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "api/users", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class UserApi {

    private final UserService userService;

    public UserApi(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return this.userService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createUser(@RequestBody User user) {
        this.userService.save(user);
    }

    @PutMapping
    public User updateUser(@RequestBody User user) {
        return this.userService.save(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable String id) throws Exception {
        User user = this.userService.findById(id).orElseThrow(Exception::new);
        if(user==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PostMapping("/auth")
    public ResponseEntity<User> getUser(@RequestBody UserAuth userAuth) throws ObjectNotFoundException {
        User user = this.userService.findByUsername(userAuth.getUsername(), userAuth.getPassword());
        if(user==null || !user.getPassword().equals(userAuth.getPassword())){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        this.userService.deleteById(id);
    }
}
