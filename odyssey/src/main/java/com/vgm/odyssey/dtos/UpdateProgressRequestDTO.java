package com.vgm.odyssey.dtos;

public class UpdateProgressRequestDTO {

    private String progress;

    public UpdateProgressRequestDTO(String worldId, String progress) {
        this.progress = progress;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }
}
