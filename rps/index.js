player = {name:"player",move:"", score:0};
computer = {move:"", score:0};
var historyArr = new Array();

function returnWinner(pM, cM) {

	if (pM === cM) {
		return "no one";
	} else if (pM === "O" & cM === "X" || pM === "X" & cM === "I" || pM === "I" & cM === "O") {
		player.score += 1;
		return player.name;
	} else if (pM === "O" & cM === "I" || pM === "I" & cM === "X" || pM === "X" & cM === "O") {
		computer.score += 1;
		return "Computer";
	} else return "something is amiss"
	
}

function computerMove() {
	var options = ["O", "I", "X"];
	var choice = Math.floor(Math.random() * 3 + 0);
	var historyLast = historyArr.length - 1;
	if (historyArr.length > 3) {
		if (historyArr[historyLast][0] === historyArr[historyLast-1][0] && historyArr[historyLast][0]=== historyArr[historyLast-2][0] && historyArr[historyLast][0] !== null) {
			if (historyArr[historyLast][0] === "O") {
				console.log("Computer chose I");
				return "I";
			} else if (historyArr[historyLast][0] === "I") {
				console.log("Computer chose X");
				return "X";
			} else if (historyArr[historyLast][0] === "X") {
				console.log("Computer chose O");
				return "O";
			}
		} 
		else {
			console.log("Computer chose " + options[choice]);
			return options[choice];									
		}
	} else {
		console.log("Computer chose " + options[choice]);
		return options[choice];
	}
}

function clicking(playerChoice) {
	player.move=playerChoice;
	console.log('Player chose ' + player.move);
	computer.move = computerMove();
	historyArr.push(player.move + " VS " + computer.move);
	updateFields();
}

function writeHistory() {
	var len = historyArr.length;
	if (len % 3 == 0) {
		return historyArr.length + ": " +historyArr[historyArr.length-1] + "<br>";
	} else return historyArr.length + ": " +historyArr[historyArr.length-1] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
}

function updateFields() {
	document.getElementById("playerChoice").innerHTML = player.move;
	document.getElementById("computerChoice").innerHTML = computer.move;
	document.getElementById("winner").innerHTML = returnWinner(player.move, computer.move) + " wins!";
	document.getElementById("playerScore").innerHTML = player.score;
	document.getElementById("compScore").innerHTML = computer.score;
	document.getElementById("history").innerHTML += writeHistory();
}

function newGame() {
	player.score = computer.score = 0;
	player.move = computer.move = "";
	historyArr = [];
	document.getElementById("playerChoice").innerHTML = "";
	document.getElementById("computerChoice").innerHTML = "";
	document.getElementById("winner").innerHTML = "";
	document.getElementById("playerScore").innerHTML = player.score;
	document.getElementById("compScore").innerHTML = computer.score;
	document.getElementById("history").innerHTML = "";
}

function changeName() {
	player.name = prompt("Enter new name:", "");
	console.log(player.name);
	document.getElementById("playerName").innerHTML = player.name;
}
