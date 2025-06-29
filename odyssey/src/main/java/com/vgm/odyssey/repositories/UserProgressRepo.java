package com.vgm.odyssey.repositories;

import com.vgm.odyssey.models.User;
import com.vgm.odyssey.models.UserProgress;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserProgressRepo extends JpaRepository<UserProgress, Long> {
    UserProgress getUserProgressByUser_UserIdAndWorld_WorldId(Long userId, Long worldId);
    List<UserProgress> getAllByUser(User user);
}
