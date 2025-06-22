package com.vgm.odyssey.controllers;

import com.vgm.odyssey.dtos.UserLoginDTO;
import com.vgm.odyssey.models.User;
import com.vgm.odyssey.repositories.UserRepository;
import com.vgm.odyssey.security.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public record JwtResponse(String token) {}

    @PostMapping("/login")
    public ResponseEntity<?> login( @RequestBody UserLoginDTO loginData) {
        // get the user, make it null otherwise
        User user = userRepo.findByEmail(loginData.getEmail()).orElse(null);

        // if we do not have a user or the password does not match, return an error
        if (user == null || !passwordEncoder.matches(loginData.getPassword(), user.getPasshash())) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
        }

        // generate the token
        String token = jwtUtil.generateToken(user.getEmail());
        return ResponseEntity.ok(new JwtResponse(token));
    }
}
