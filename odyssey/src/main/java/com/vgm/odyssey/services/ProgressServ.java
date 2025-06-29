package com.vgm.odyssey.services;

import com.vgm.odyssey.dtos.AllProgressDTO;
import com.vgm.odyssey.models.User;
import com.vgm.odyssey.models.UserProgress;
import com.vgm.odyssey.models.World;
import com.vgm.odyssey.repositories.UserProgressRepo;
import com.vgm.odyssey.repositories.WorldRepository;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class ProgressServ {

    private final UserProgressRepo repo;
    private final WorldRepository world;
    private final UserProgressRepo userProgressRepo;

    public ProgressServ(UserProgressRepo repo, WorldRepository world, UserProgressRepo userProgressRepo) {
        this.repo = repo;
        this.world = world;
        this.userProgressRepo = userProgressRepo;
    }

    public String getUserProg(User u, String worldName) {
        World w = world.getWorldByMapName(worldName);
        if (w == null) {
            throw new IllegalArgumentException("Invalid world name: " + worldName);
        }
        UserProgress p = repo.getUserProgressByUser_UserIdAndWorld_WorldId(u.getUserId(), w.getWorldId());
        if (p != null) {
            return p.getProgress();
        }
        return "0x0";
    }

    public void updateOrCreateWorldProgress(User u, String worldName, String progress) {
        World w = world.getWorldByMapName(worldName);

        if (w == null) {
            throw new IllegalArgumentException("Invalid world name: " + worldName);
        }

        String max = w.getMaxLimit();

        BigInteger maxNum = new BigInteger(max.replaceFirst("^0x", ""), 16);
        BigInteger progressNum = new BigInteger(progress.replaceFirst("^0x", ""), 16);

        if (progressNum.compareTo(maxNum) > 0) {
            throw new IllegalArgumentException("Invalid progress: " + progress);
        }

        UserProgress p = repo.getUserProgressByUser_UserIdAndWorld_WorldId(u.getUserId(), w.getWorldId());

        if (p == null) {
            p = new UserProgress();
            p.setWorld(w);
            p.setUser(u);
        }
        p.setProgress(progress);
        repo.save(p);
    }

    public String getMaxLimitOfWorld(String worldName) {
        return world.getWorldByMapName(worldName).getMaxLimit();
    }

    public List<AllProgressDTO> getAllProgFromUser(User u) {

        List<UserProgress> progresses = userProgressRepo.getAllByUser(u);

        return progresses.stream().map(
                p -> new AllProgressDTO(p.getWorld().getMapName(),
                        p.getProgress(),
                        p.getWorld().getMaxLimit())
        ).toList();
    }

}
