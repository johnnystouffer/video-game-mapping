package com.vgm.odyssey.dtos;

public class UpdateProgressRequestDTO {

    private String worldId;
    private String progress;


    public UpdateProgressRequestDTO(String worldId, String progress) {
        this.worldId = worldId;
        this.progress = progress;
    }

    public String getWorldId() {
        return worldId;
    }

    public void setWorldId(String worldId) {
        this.worldId = worldId;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }
}
