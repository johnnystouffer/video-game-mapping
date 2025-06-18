package com.vgm.odyssey.controllers;

import com.vgm.odyssey.dtos.UserResponseDTO;
import com.vgm.odyssey.dtos.UserSignupDTO;
import com.vgm.odyssey.models.User;
import com.vgm.odyssey.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userServ;

    @Autowired
    public UserController(UserService userServ){
        this.userServ = userServ;
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserResponseDTO> createUser(@Valid @RequestBody UserSignupDTO user) {
        User newUser = userServ.createUser(user);
        return ResponseEntity.ok(new UserResponseDTO(newUser));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUser(@PathVariable Long id) {
        return this.userServ.getUserById(id)
                .map(user -> ResponseEntity.ok(new UserResponseDTO(user)))
                .orElse(ResponseEntity.notFound().build());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }


}
