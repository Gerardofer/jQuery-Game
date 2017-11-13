$(document).ready(function(){
	var userName = prompt ("What's your name?");

	if (userName){
		$('#name').text(userName);
	};

//Random number beetwen 19 and 120 needs to be generated by the system to start the game.
	var randomNum = Math.floor((Math.random() * (120 - 19 + 1) + 19));
	$('#score').text(randomNum);
	
//A random number beetwen 1 and 12 needs to be assigned to each crystal.
	
	var rocksArr = ["ruby", "diamond", "emeral", "topaz"];
	var numbRan = [];
	var crystalRanNum;  
	var userTotal = 0;
	var wins = 0;
	var losses = 0;
	// var ruby = false;
	// var emeral = false;
	// var diamond = false;
	// var topaz = false;
	// var cryRuby = $("#ruby")
	// var cryDia = $("#diamond")
	// var cryEme = $("#emeral")
	// var cryTopaz = $("#topaz")
	
	
	for (var i = 0; i < rocksArr.length; i++) {
		crystalRanNum = Math.floor(Math.random() * 12) + 1;
		numbRan.push(crystalRanNum);
	}

	$('#ruby').on('click', function(){
		var rubyVal = numbRan[0];
		rubyVal = parseInt(rubyVal);
		userTotal += rubyVal;
		$('#userScore').html(userTotal);
		console.log(userTotal);
	});	

	$('#diamond').on('click', function(){
		var diaVal = numbRan[1];		
		diaVal = parseInt(diaVal);
		userTotal += diaVal;
		$('#userScore').html(userTotal);
		console.log(userTotal);
	});

	$('#emeral').on('click', function(){
		var emeVal = numbRan[2];
		emeVal = parseInt(emeVal);
		userTotal += emeVal;
		$('#userScore').html(userTotal);
		console.log(userTotal);
	});

	$('#topaz').on('click', function(){
		var topVal = numbRan[3];
		topVal = parseInt(topVal);
		userTotal += topVal;
		$('#userScore').html(userTotal);
		console.log(userTotal);
	});

	function WinLoss(){
		if (userTotal === randomNum){
			wins++;
			$('#win-loss').text("Well Done!");
			$('#wins').text(wins);
		}
		if (userTotal >= randomNum){
			losses++;
			$('#win-loss').text("Better luck next time!");
			$('#loss').text(losses);
		}
	}

	WinLoss()

});



//The numbers assigned to each crystal will change at each start of the game.

//if user's score === random number (WIN), else (LOSS).
//game should re-start without refreshing the page.

	// $('.crystals').on('click', function(){
		
	// 	console.log('you clicked');
		
	

