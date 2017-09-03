package main.rps.web.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import main.rps.domain.GameSession;

public class GameSessionDto {
	private Long won;
	private Long lost;
	private Long ties;
	private LocalDateTime playTime;

	public static GameSessionDto of(GameSession gameSession) {
		GameSessionDto dto = new GameSessionDto();

		dto.setLost(gameSession.getLossAmount());
		dto.setWon(gameSession.getWinAmount());
		dto.setTies(gameSession.getTieAmount());
		dto.setPlayTime(gameSession.getPlayTime());

		return dto;

	}

	public Long getWon() {

		return won;
	}

	public void setWon(Long won) {
		this.won = won;
	}

	public Long getLost() {
		return lost;
	}

	public void setLost(Long lost) {
		this.lost = lost;
	}

	public Long getTies() {
		return ties;
	}

	public void setTies(Long ties) {
		this.ties = ties;
	}

	public LocalDateTime getPlayTime() {
		return playTime;
	}

	public void setPlayTime(LocalDateTime playTime) {
		this.playTime = playTime;
	}

}
