var simulation;

function battle() {
	// Get values from input as numbers
	a_armies = parseInt($(".attackers input").val());
	d_armies = parseInt($(".defenders input").val());

	// Convert number of armies to number of dice, max 3 for attackers, 2 for defenders
	var a_dice = getDiceNumber(a_armies, 3);
	var d_dice = getDiceNumber(d_armies, 2);

	// Continue if we have the min number of attackers, or if any defenders are left
	if(a_armies > 1 && d_armies > 0) {

		// Clear dice and everything up first
		reset();

		// Get random dice roll and push to arrays
		for (i = 0; i < a_dice; i++) {
			var result = roll();
			a_result.push(result);
		}
		for (i = 0; i < d_dice; i++) {
			var result = roll();
			d_result.push(result);
		}

		// Sort dice rolls 1-6, then reverse
		a_result.sort().reverse();
		d_result.sort().reverse();

		// For each result, add the dice to the output
		$(a_result).each(function(i, result){
			var result = intToDice(i, result);
			$(".attackers .output").append(result);
		});
		$(d_result).each(function(i, result){
			var result = intToDice(i, result);
			$(".defenders .output").append(result);
		});

		// Get the final results of the battle
		getBattleResult();
	}
}


function getDiceNumber(armies, max) {
	// Get the correct number of dice for attackers and defenders
	if(armies > max) { var armies = max; }
	if(armies < 2) { var armies = 1; }

	// Return number of armies
	return armies;
}


function roll() {
	// Get a random number between 1 and 6
	var roll = 1 + Math.floor(Math.random() * 6, 0);
	return roll;
}


function intToDice(i, result) {
	// Convert the number into a div where we can display the dice face
	return '<div class=\"square dice-' + i + '\ roll-' + result + '"></div>';
}


function getBattleResult() {
	// Attacking die must be greater than defenders. If tied, the defender wins
	if(a_result[0] > d_result[0]) {
		d_armies--;
		$(".attackers .dice-0").addClass("win");
		$(".defenders .dice-0").addClass("lose");
	} else {
		a_armies--;
		$(".attackers .dice-0").addClass("lose");
		$(".defenders .dice-0").addClass("win");
	}
	if(a_result[1] > d_result[1]) {
		d_armies--;
		$(".attackers .dice-1").addClass("win");
		$(".defenders .dice-1").addClass("lose");
	} else {
		a_armies--;
		$(".attackers .dice-1").addClass("lose");
		$(".defenders .dice-1").addClass("win");
	}

	// Must have at least 1 army to attack
	if(a_armies < 1) {
		$(".attackers input").val("1");
	} else {
		$(".attackers input").val(a_armies);
	}
	if(d_armies < 1) {
		$(".defenders input").val("0");
	} else {
		$(".defenders input").val(d_armies);
	}

	// Display the final result of the battle by reading the classes of the dice
	var a_final = $(".attackers .win").length - 2;
	if(a_final < 0) {
		$(".attackers h2").append(' (' + a_final + ')');
	}
	var d_final = $(".defenders .win").length - 2;
	if(d_final < 0) {
		$(".defenders h2").append(' (' + d_final + ')');
	}

	// Show final result of battle if defenders, have 0 armies left
	if(d_armies < 1 && a_armies >= 2) {
		$(".attackers").addClass("winner");
		$(".defenders").addClass("loser");
		stop = true;
	}
}

function repeatOften() {
	// Run battle repeatedly as fast as possible
	if(stop == false) {
		setTimeout(function() {
			battle();
			simulation = requestAnimationFrame(repeatOften);
		}, speed);		
	}
}

$(function(){
	// Battle once on click
	$(".roll").click(battle);

	// Simulate an entire battle, one roll per second
	$(".simulate").click(function(){
		battle();
		speed = 600;
		stop = false;
	  simulation = requestAnimationFrame(repeatOften);
	});

	// Simulate an entire battle, rolling as quickly as possible
	$(".blitz").click(function(){
		speed = 0;
		stop = false;
	  simulation = requestAnimationFrame(repeatOften);
	});

	// Stop and reset simulator
	$(".reset").click(reset);

	$(".armies").bind("focus blur keyup", function(){
		$(".attackers, .defenders").removeClass("winner loser");
		stop = true;
	});
});


function reset() {
	// Resets result arrays
	a_result = [];
	d_result = [];

	// Throw away the dice
	$(".output").empty();

	// Remove winner class if applicable
	$(".attackers, .defenders").removeClass("winner loser");

	// Remove appended (-1) or (-2) to labels
	$(".attackers h2").text("Attackers");
	$(".defenders h2").text("Defenders");
}