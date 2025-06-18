package com.vgm.odyssey.dtos;

import com.vgm.odyssey.models.User;

public class UserResponseDTO {
    private Long id;
    private String username;
    private String email;
    private String role;

    public UserResponseDTO() {}

    public UserResponseDTO(User user) {
        this.id = user.getUserId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.role = user.getRole();
    }


    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getRole() {
        return role;
    }
}
