package main.rps.web;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import main.rps.domain.Profile;
import main.rps.repository.ProfileRepository;
import main.rps.web.dto.ProfileDto;

@RestController
@RequestMapping("/profile")
public class ProfileController {
	@Autowired
	private ProfileRepository profileRepository;

	@RequestMapping("/profiles")
	public List<ProfileDto> getProfiles() {

		List<ProfileDto> result = new ArrayList<>();
		List<Profile> profiles = profileRepository.findAll();

		for (Profile profile : profiles) {
			result.add(ProfileDto.of(profile));
		}

		return result;

	}

}
