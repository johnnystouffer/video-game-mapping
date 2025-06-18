package com.vgm.odyssey.models;

import jakarta.persistence.*;

@Entity
public class World {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "world_id")
    private Long worldId;

    @Column(nullable = false)
    private String game;

    @Column(nullable = false)
    private String mapName;

    @Column(nullable = false)
    private String maxLimit;
}
