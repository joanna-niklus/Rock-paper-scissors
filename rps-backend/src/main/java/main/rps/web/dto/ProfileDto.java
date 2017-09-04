package main.rps.web.dto;

import main.rps.domain.Profile;

public class ProfileDto {
	private String username;
	private Long age;
	private String country;
	private Long id;

	public static ProfileDto of(Profile profile) {
		ProfileDto dto = new ProfileDto();
		
		dto.setUsername(profile.getUsername());
		dto.setAge(profile.getAge());
		dto.setCountry(profile.getCountry());
		dto.setId(profile.getId());
		
		return dto;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Long getAge() {
		return age;
	}

	public void setAge(Long age) {
		this.age = age;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
