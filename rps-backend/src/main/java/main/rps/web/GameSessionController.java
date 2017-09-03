package main.rps.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import main.rps.domain.GameSession;
import main.rps.repository.GameSessionRepository;
import main.rps.web.dto.GameSessionDto;

@RestController
@RequestMapping("/session")
public class GameSessionController {
	@Autowired
	private GameSessionRepository gameSessionRepository;

	@RequestMapping("/sessionsByPlayer")
	public List<GameSessionDto> getSession(@RequestParam("profileId") Long profileId) {

		List<GameSessionDto> result = new ArrayList<>();
		List<GameSession> gameSessions = gameSessionRepository.findAllByProfile_id(profileId);

		for (GameSession gameSession : gameSessions) {
			result.add(GameSessionDto.of(gameSession));
		}

		return result;

	}
}