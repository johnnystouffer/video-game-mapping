package com.vgm.odyssey.dtos;

import com.vgm.odyssey.models.User;

public class UserDTO {
    private String username;
    private String password;

    public UserDTO(User user) {
        this.username = user.getUsername();
        this.password = user.getPasshash();
    }
}
