package com.vgm.odyssey.dtos;

public class ProgressGetDTO {
    private String worldId;

    public ProgressGetDTO(String worldId) {
        this.worldId = worldId;
    }

    public String getWorldId() {
        return worldId;
    }

    public void setWorldId(String worldId) {
        this.worldId = worldId;
    }
}
