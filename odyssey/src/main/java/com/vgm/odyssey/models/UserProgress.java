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

    public UserProgress(User user, World world, String progress) {
        this.user = user;
        this.world = world;
        this.progress = progress;
    }

    public UserProgress() {

    }

    public Long getProgId() {
        return progId;
    }

    public void setProgId(Long progId) {
        this.progId = progId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public World getWorld() {
        return world;
    }

    public void setWorld(World world) {
        this.world = world;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }
}
