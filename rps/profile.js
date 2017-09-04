function loadProfiles() { // loads the profiles into the dd after the page has loaded..?
	document.getElementById("profile-select").innerHTML = dropdownOptions(getProfiles());

}

function getProfiles() { // supplies the list of profiles from the DB
	var result = [];

	// ...

	return ["Username1", "Username2", "Username3"]
}

function getSessions(profileName) { // supplies the list of sessions for the profile from the DB
	var result = [];

	return [[profileName, 4, 1, 6, "lastPlayed"], [profileName, "wins", "losses", "ties", "lastPlayed"], [profileName, "wins", "losses", "ties", "lastPlayed"]];
}

function dropdownOptions(listOfProfiles) {
	var result = "<option disabled selected value> -- select a profile -- </option>";
	for (profile of listOfProfiles) {
		result += "<option>" + profile + "</option>";
	};

	return result
}

function updateTable(profileName) { // updates the table, after the selection of an option
	console.log(profileName);
	var headerOfTable = "<tr><th>Session ID</th><th>Username</th><th>Wins</th><th>Losses</th><th>Ties</th><th>Last played</th></tr>";	
	var otherRowsOfTheTable = getInfoOfUser(profileName);
	document.getElementById("session-info").innerHTML = headerOfTable + otherRowsOfTheTable;
}

function getInfoOfUser(profileName) {
	var result = "<tr>";

	var sessionsOfProfile = getSessions(profileName);
	var i = 1;
		for (session of sessionsOfProfile) {
			result += "<td>" + i + "</td>";
			for (variable of session) {
				result += "<td>" + variable + "</td>";
			}
			result += "</tr>"
			i += 1;
		}
	return result;
}