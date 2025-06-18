package com.vgm.odyssey.repositories;

import com.vgm.odyssey.models.World;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorldRepository extends JpaRepository<World, Long> {}
