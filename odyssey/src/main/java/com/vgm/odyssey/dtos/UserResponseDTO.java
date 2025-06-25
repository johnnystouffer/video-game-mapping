package com.vgm.odyssey.dtos;

import com.vgm.odyssey.models.User;

public class UserResponseDTO {
    private String username;
    private String email;

    public UserResponseDTO() {}

    public UserResponseDTO(User user) {
        this.username = user.getUsername();
        this.email = user.getEmail();
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }
}
