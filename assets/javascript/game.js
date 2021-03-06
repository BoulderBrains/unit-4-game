// Setting some empty variable to use later
var wins = 0;
var losses = 0;
var userScore = 0;
var targetNumber = 0;

// appending wins and losses to page for display for user
$("#wins").append(wins);
$("#losses").append(losses);

$(".crystal").click(function() {
	//get the value off a crystal
	var crystalValue = $(this).val();
	
	// resetting userScore to the previous userScore + the value of the crystal that was clicked
	userScore = parseInt(crystalValue) + userScore;
	
	// display the userScore variable on the page
	$("#score").text(userScore);

	// if userScore === targetNumber { player wins, wins++, print increased wins to page, alert the suer, reset game }
	if (userScore === targetNumber) {
		// increase # of wins by 1
		wins++;
		
		// update the newly increased wins vairble it in html
		$("#wins").text(wins);
		
		// trigger the bootstrap wins modal
		$("#winModal").modal('show');

		// reset the game
		reset();
	}
	// if userScore > targetNumber { player loses, losses++, print incresed losses to page, alert the user, reset game }
	if (userScore > targetNumber) {
		losses++;
		$("#losses").text(losses);
		$("#loseModal").modal('show');
		reset();
	}
});

function generateTargetNumber() {
	// create targetNumber variable and set it to a random number 19 - 120
	targetNumber = Math.floor((Math.random() * 120) + 19);

	// display that targetVariable in the .target-number div
	$("#target-number").text(targetNumber);
}

function generateCrystalValues() {
	// push the crystalyValue number to the value of the crystal
	$(".crystal").each(function() {
		// create crystalValue variable and set it to a random number between 1-12
		crystalValue = Math.floor((Math.random() * 12) + 1);

		// set the value to THIS crystal value, as it iterates through all .crystal elements
		$(this).val(crystalValue);
	});
}

function reset() {
	// find & set a new targetNumber
	generateTargetNumber();

	// find & set the crystalValues
	generateCrystalValues();

	// set userScore back to 0
	userScore = 0;

	// display the reset userScore variable to the page
	$("#score").text(userScore);
}

function hardReset() {
	// forces a page reload which will reset the user's wins & losses
	location.reload();
}

// On click of the #hard-reset button, trigger that function
$("#hard-reset").on("click", hardReset);

// This starts the game
reset();