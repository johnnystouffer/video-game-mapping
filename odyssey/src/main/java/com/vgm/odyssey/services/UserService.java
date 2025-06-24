package com.vgm.odyssey.services;

import com.vgm.odyssey.dtos.UserSignupDTO;
import com.vgm.odyssey.models.User;
import com.vgm.odyssey.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }

    public User createUser(UserSignupDTO user) {
        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }

        // create the user object
        User newUser = new User();
        newUser.setEmail(user.getEmail());
        newUser.setUsername(user.getUsername());
        newUser.setRole("user");

        // the encryption has salt built in
        newUser.setPasshash(passwordEncoder.encode(user.getPassword()));

        // save the user
        return userRepo.save(newUser);
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    public User authenticateUser(String email, String password) {
        Optional<User> userOpt = userRepo.findByEmail(email);
        if (userOpt.isEmpty() || !passwordEncoder.matches(password, userOpt.get().getPasshash())) {
            throw new IllegalArgumentException("Invalid email or password");
        }
        return userOpt.get();
    }
}
