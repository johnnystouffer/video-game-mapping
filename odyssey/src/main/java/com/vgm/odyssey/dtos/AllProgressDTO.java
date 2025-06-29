package com.vgm.odyssey.dtos;

public class AllProgressDTO {
    private String mapId;
    private String progress;
    private String maxLimit;

    public AllProgressDTO(String mapId, String progress, String maxLimit) {
        this.mapId = mapId;
        this.progress = progress;
        this.maxLimit = maxLimit;
    }

    public String getMapId() {
        return mapId;
    }

    public void setMapId(String mapId) {
        this.mapId = mapId;
    }

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }

    public String getMaxLimit() {
        return maxLimit;
    }

    public void setMaxLimit(String maxLimit) {
        this.maxLimit = maxLimit;
    }
}
