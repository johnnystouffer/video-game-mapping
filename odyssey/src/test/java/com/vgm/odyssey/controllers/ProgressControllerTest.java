package com.vgm.odyssey.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.vgm.odyssey.dtos.UpdateProgressRequestDTO;
import com.vgm.odyssey.dtos.UserLoginDTO;
import com.vgm.odyssey.models.User;
import com.vgm.odyssey.repositories.UserProgressRepo;
import com.vgm.odyssey.repositories.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import java.math.BigInteger;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ProgressControllerTest {

    @Autowired private MockMvc mockMvc;
    @Autowired private ObjectMapper objectMapper;
    @Autowired private UserRepository userRepo;
    @Autowired private PasswordEncoder passwordEncoder;
    @Autowired private UserProgressRepo userProgressRepo;

    private static final String EMAIL = "working@gmail.com";
    private static final String PASSWORD = "secure-password";
    private static final String WORLD_ID = "cap-kingdom";

    private String getToken(String email, String password) throws Exception {
        UserLoginDTO loginDTO = new UserLoginDTO(email, password);
        MvcResult result = mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(loginDTO)))
                .andExpect(status().isOk())
                .andReturn();
        return objectMapper.readTree(result.getResponse().getContentAsString()).get("token").asText();
    }

    @BeforeEach
    void setUp() {
        userProgressRepo.deleteAll();
        userRepo.deleteAll();
        User user = new User();
        user.setEmail(EMAIL);
        user.setUsername("working-username");
        user.setPasshash(passwordEncoder.encode(PASSWORD));
        user.setRole("user");
        userRepo.save(user);
    }

    @Test
    void getWorldProgress_whenNoneSet_returnsZero() throws Exception {
        String token = getToken(EMAIL, PASSWORD);
        mockMvc.perform(get("/api/prog/" + WORLD_ID)
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.progress").value("0x0"));
    }

    @Test
    void putProgress_withZero_setsAndReturnsCorrectly() throws Exception {
        String token = getToken(EMAIL, PASSWORD);
        UpdateProgressRequestDTO dto = new UpdateProgressRequestDTO("0x0");

        mockMvc.perform(put("/api/prog/" + WORLD_ID)
                        .header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/prog/" + WORLD_ID)
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.progress").value("0x0"));
    }

    @Test
    void putProgress_withMidValue_setsAndReturnsCorrectly() throws Exception {
        String token = getToken(EMAIL, PASSWORD);
        String mid = "0xFFFFFFFFFFFFFFFF";
        UpdateProgressRequestDTO dto = new UpdateProgressRequestDTO(mid);

        mockMvc.perform(put("/api/prog/" + WORLD_ID)
                        .header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/prog/" + WORLD_ID)
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.progress").value(mid));
    }

    @Test
    void putProgress_withMax81Bit_setsAndReturnsCorrectly() throws Exception {
        String token = getToken(EMAIL, PASSWORD);
        String max81 = "0x1FFFFFFFFFFFFFFFFFF";
        UpdateProgressRequestDTO dto = new UpdateProgressRequestDTO(max81);

        mockMvc.perform(put("/api/prog/" + WORLD_ID)
                        .header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/prog/" + WORLD_ID)
                        .header("Authorization", "Bearer " + token))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.progress").value(max81));
    }

    @Test
    void putProgress_exceedingMax81Bit_returnsBadRequest() throws Exception {
        String token = getToken(EMAIL, PASSWORD);
        String tooLarge = "0x3FFFFFFFFFFFFFFFFFFFF"; // 1 to big

        UpdateProgressRequestDTO dto = new UpdateProgressRequestDTO(tooLarge);

        mockMvc.perform(put("/api/prog/" + WORLD_ID)
                        .header("Authorization", "Bearer " + token)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(dto)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void getWorldProgress_unauthenticated_returnsUnauthorized() throws Exception {
        mockMvc.perform(get("/api/prog/" + WORLD_ID))
                .andExpect(status().isUnauthorized());
    }

    @AfterEach
    void tearItDown() {
        userRepo.deleteAll();
        userRepo.flush();
        userProgressRepo.deleteAll();
        userProgressRepo.flush();
    }
}
