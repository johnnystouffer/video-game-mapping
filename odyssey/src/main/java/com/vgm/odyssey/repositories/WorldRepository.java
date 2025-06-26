package com.vgm.odyssey.repositories;

import com.vgm.odyssey.models.World;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorldRepository extends JpaRepository<World, Long> {
    World getWorldByMapName(String mapName);
}
