var nextSessionToAdd = 0;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == document.getElementById("popup1")) {
		hideTheStuff("popup1");
	} else if (event.target == document.getElementById("popup2")) {
		hideTheStuff("popup2");
	}
};

// When the user presses Esc, close the model
document.onkeypress = function(event) {
	if (
		event.key === "Escape" &&
		document.getElementById("popup1").style.visibility === "visible"
	) {
		hideTheStuff("popup1");
	} else if (
		event.key === "Escape" &&
		document.getElementById("popup2").style.visibility === "visible"
	) {
		hideTheStuff("popup2");
	}
};

function displayTheStuff(idString) {
	document.getElementById(idString).style.visibility = "visible";
	document.getElementById(idString).style.opacity = 1;
}

function hideTheStuff(idString) {
	document.getElementById(idString).style.visibility = "hidden";
	document.getElementById(idString).style.opacity = 0;
}

function saveTheStuff() {
	var username = document.getElementById("new-username").value;
	var age = document.getElementById("new-age").value;
	var country = document.getElementById("new-country").value;
}

// Make the modifying table with textarea fields and id-s for each field
function fillTheTable() {
	var information = getDataFromTable();
	var tableHeader =
		"<tr><th>Session ID</th><th>Username</th><th>Wins</th><th>Losses</th><th>Ties</th><th>Last played</th></tr>";
	var tableRows = "";
	var lineIteration = 1;
	for (session of information) {
		tableRows += "<tr>";
		var columnIteration = 1;
		for (variable of session) {
			tableRows +=
				"<td><textarea id='new-session-" +
				lineIteration +
				"" +
				columnIteration +
				"'>" +
				variable +
				"</textarea></td>";
			columnIteration += 1;
		}
		tableRows += "</tr>";
		lineIteration += 1;
	}
	``;
	document.getElementById("insert-game-session-info").innerHTML =
		tableHeader + tableRows;
}

// Gets the data from the original table filled with data from the 'server'
// the iteration i represents rows of the table
function getDataFromTable() {
	var result = [];
	for (var i = 1; i < 100; i++) {
		var tmpStorage = [];
		try {
			tmpStorage.push(
				document.getElementById(i + "session-id").innerHTML
			);
			tmpStorage.push(
				document.getElementById(i + "session-username").innerHTML
			);
			tmpStorage.push(
				document.getElementById(i + "session-wins").innerHTML
			);
			tmpStorage.push(
				document.getElementById(i + "session-losses").innerHTML
			);
			tmpStorage.push(
				document.getElementById(i + "session-ties").innerHTML
			);
			tmpStorage.push(
				document.getElementById(i + "session-time").innerHTML
			);

			result.push(tmpStorage);
		} catch (e) {
			nextSessionToAdd = i;
			break;
		}
	}

	return result;
}

// Saves the modified changes into a database and then displays them in the updated 'original' table
function saveTheSessionStuff() {
	hideTheStuff("popup2");
	window.alert("TODO");
	console.log(document.getElementById("new-session-12").innerHTML);
}

// Adds a new field with sessionID and Username prefilled with respective necessary values
function addNewEntry() {
	var newRowItems = "<tr><textarea id='new-session-row-" + nextSessionToAdd + "'>";

}
