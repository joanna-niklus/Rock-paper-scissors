package main.rps.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import main.rps.domain.GameSession;

public interface GameSessionRepository extends JpaRepository<GameSession, Long>, JpaSpecificationExecutor<GameSession> {

	List<GameSession> findAllByProfile_id(Long profileId);

}