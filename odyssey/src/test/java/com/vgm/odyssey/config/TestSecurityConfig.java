package com.vgm.odyssey.config;

import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@TestConfiguration
@EnableWebSecurity
public class TestSecurityConfig {
    // You can leave this empty if you're just using @WithMockUser in your tests
}
