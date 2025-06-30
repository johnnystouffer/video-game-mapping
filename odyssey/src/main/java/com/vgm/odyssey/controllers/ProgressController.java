package com.vgm.odyssey.controllers;

import com.vgm.odyssey.dtos.AllProgressDTO;
import com.vgm.odyssey.dtos.MaxLimitDTO;
import com.vgm.odyssey.dtos.ProgressResponseDTO;
import com.vgm.odyssey.dtos.UpdateProgressRequestDTO;
import com.vgm.odyssey.models.User;
import com.vgm.odyssey.models.UserProgress;
import com.vgm.odyssey.services.ProgressServ;
import jakarta.validation.Valid;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/prog")
public class ProgressController {

    private final ProgressServ progServ;

    @Autowired
    public ProgressController(ProgressServ progServ) {
        this.progServ = progServ;
    }

    @GetMapping(path="/{worldId}")
    public ResponseEntity<ProgressResponseDTO> getWorldProgress(@PathVariable String worldId,
                                                                @AuthenticationPrincipal User u) {
        if (u == null) { return ResponseEntity.status(401).build(); }
        return ResponseEntity.ok(new ProgressResponseDTO(progServ.getUserProg(u, worldId)));
    }

    @PutMapping(path = "/{worldId}")
    public ResponseEntity<?> updateProgress(@Valid @RequestBody UpdateProgressRequestDTO dto,
                                            @PathVariable String worldId,
                                            @AuthenticationPrincipal User u) {
        progServ.updateOrCreateWorldProgress(u, worldId, dto.getProgress());
        return ResponseEntity.ok().build();
    }

    @GetMapping(path = "max/{worldId}")
    public ResponseEntity<MaxLimitDTO> getMaxLimit(@PathVariable String worldId,
                                                   @AuthenticationPrincipal User u) {
        if (u == null) { return ResponseEntity.status(401).build(); }
        return ResponseEntity.ok(new MaxLimitDTO(progServ.getMaxLimitOfWorld(worldId)));
    }

    @GetMapping(path = "/all")
    public ResponseEntity<List<AllProgressDTO>> getAllProgress(@AuthenticationPrincipal User u) {
        if (u == null) { return ResponseEntity.status(401).build(); }

        List<AllProgressDTO> results = progServ.getAllProgFromUser(u);

        return ResponseEntity.ok(results);
    }
}
