function getData() {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'profileQuery.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
		// .open will NOT return a value but simply returns undefined in async mode so use a callback
		var listOfProfiles = listify(xobj.responseText);
		document.getElementById("profile-select").innerHTML = dropdownOptions(listOfProfiles);
		}
	}
	xobj.send(null);
}

function listify(jsonresponse) {
	var result = [];
	var response = JSON.parse(jsonresponse);
	for (profile of response) {
		result.push([profile.id, profile.username]);
	}
	return result;
}

function getSessions(profileValues) { // supplies the list of sessions for the profile from the DB
	profileValues = profileValues.split(",");
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'profileId'+profileValues[0]+'.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			printSessions(JSON.parse(xobj.responseText), profileValues[1]);
		}
	}
	xobj.send(null);	
}

function printSessions(response, userName) {
	var i = 1;
	var result = "";
	for (session of response) {
		result += "<tr><td id='" + i + "session-id'>" + i +"</td>";
		result += "<td id='" + i + "session-username'>" + userName + "</td>";
		session = Object.values(session);
		
		result += "<td id='" + i + "session-wins'>" + session[0] + "</td>";
		result += "<td id='" + i + "session-losses'>" + session[1] + "</td>";
		result += "<td id='" + i + "session-ties'>" + session[2] + "</td>";
		result += "<td id='" + i + "session-time'>" + session[3] + "</td></tr>";
		
		i += 1;
	};

	var headerOfTable = "<tr><th>Session ID</th><th>Username</th><th>Wins</th><th>Losses</th><th>Ties</th><th>Last played</th></tr>";
	document.getElementById("session-info").innerHTML = headerOfTable + result;
}

function dropdownOptions(listOfProfiles) { // [[id, name], [id, name], []]
	var result = "<option disabled selected value> -- select a profile -- </option>";
	for (profile of listOfProfiles) {
		result += "<option value=" + [profile[0],profile[1]] + ">" + profile[1] + "</option>";
	};

	return result
}