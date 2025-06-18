package com.vgm.odyssey.models;

import jakarta.persistence.*;

@Entity
public class UserProgress {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long progId;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "world_id", nullable = false)
    private World world;

    @Column(nullable = false)
    private String progress;
}
