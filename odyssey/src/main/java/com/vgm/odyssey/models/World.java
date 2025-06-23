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

    public World(String game, String mapName, String maxLimit) {
        this.game = game;
        this.mapName = mapName;
        this.maxLimit = maxLimit;
    }

    public World() {

    }

    public Long getWorldId() {
        return worldId;
    }

    public void setWorldId(Long worldId) {
        this.worldId = worldId;
    }

    public String getGame() {
        return game;
    }

    public void setGame(String game) {
        this.game = game;
    }

    public String getMapName() {
        return mapName;
    }

    public void setMapName(String mapName) {
        this.mapName = mapName;
    }

    public String getMaxLimit() {
        return maxLimit;
    }

    public void setMaxLimit(String maxLimit) {
        this.maxLimit = maxLimit;
    }
}
