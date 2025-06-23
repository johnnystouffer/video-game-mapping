package com.vgm.odyssey.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vgm.odyssey.dtos.UserLoginDTO;
import com.vgm.odyssey.models.User;
import com.vgm.odyssey.repositories.UserProgressRepo;
import com.vgm.odyssey.repositories.UserRepository;
import com.vgm.odyssey.services.ProgressServ;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ProgressControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ProgressServ progressServ;

    @Autowired
    private UserProgressRepo userProgressRepo;

    @BeforeEach
    void setUp() {
        userRepo.deleteAll();
        userProgressRepo.deleteAll();
        User user = new User();
        user.setEmail("working@gmail.com");
        user.setUsername("working-username");
        user.setPasshash(passwordEncoder.encode("secure-password"));
        user.setSalt("");
        user.setRole("user");
        userRepo.save(user);
    }

    @Test
    void testInvalidWorld() throws Exception {

    }

}
