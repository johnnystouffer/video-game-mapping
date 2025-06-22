package com.vgm.odyssey.dtos;

public class ProgressResponseDTO {
    private String progress;


    public ProgressResponseDTO(String progress) {
        this.progress = progress;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }
}
