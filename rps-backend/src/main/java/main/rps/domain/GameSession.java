package main.rps.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters.LocalDateTimeConverter;

@Entity
public class GameSession implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Long winAmount;
	private Long lossAmount;
	private Long tieAmount;
	@Convert(converter = LocalDateTimeConverter.class)
	private LocalDateTime playTime;

	@ManyToOne(optional = false)
	@JoinColumn(nullable = false, updatable = false, insertable = false)
	private Profile profile;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getWinAmount() {
		return winAmount;
	}

	public void setWinAmount(Long won) {
		this.winAmount = won;
	}

	public Long getLossAmount() {
		return lossAmount;
	}

	public void setLossAmount(Long lost) {
		this.lossAmount = lost;
	}

	public Long getTieAmount() {
		return tieAmount;
	}

	public void setTieAmount(Long ties) {
		this.tieAmount = ties;
	}

	public LocalDateTime getPlayTime() {
		return playTime;
	}

	public void setPlayTime(LocalDateTime playTime) {
		this.playTime = playTime;
	}

	public Profile getProfile() {
		return profile;
	}

	public void setProfile(Profile profile) {
		this.profile = profile;
	}

}
