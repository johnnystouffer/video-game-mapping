package com.vgm.odyssey.repositories;

import com.vgm.odyssey.models.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProgressRepo extends JpaRepository<UserProgress, Long> { }
