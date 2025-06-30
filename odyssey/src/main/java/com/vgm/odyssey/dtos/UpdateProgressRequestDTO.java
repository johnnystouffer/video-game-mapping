package com.vgm.odyssey.dtos;

import jakarta.validation.constraints.NotBlank;

public class UpdateProgressRequestDTO {

    @NotBlank
    private String progress;

    public UpdateProgressRequestDTO(String progress) {
        this.progress = progress;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }
}
