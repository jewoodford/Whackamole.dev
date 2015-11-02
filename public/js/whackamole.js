var timer = 30
var score = 0
var buttonClicked = $(this).data("box");
var chosenBox;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$("#timer").html("Timer: " + timer)
$("#score").html("Score: " + score)

//on click of id="game" look at children for class="animatedMole"
$("#game").on('click', '.animatedMole', function()  {
	$(this).removeClass('animatedMole');
	score++;

	$("#score").html("Score: " + score)
	$(this).addClass("explosion")
	setTimeout(function() {
		// console.log("it was removed")
		$(".box").removeClass("explosion")
	}, 250)
})

$("#startBtn").click(function() {
	timer = 30
	$(startBtn).prop("disabled",true);
	startGame();
})

function startGame() {
	score = 0
	var gameTimer = setInterval(function() {
		timer--
		$("#timer").html("Timer: " + timer)
		if (timer == 0) {
			$(startBtn).prop("disabled",false);
			clearInterval(gameTimer);
		}
	}, 1000)

	var moleTimer = setInterval(function() {
		chosenBox = $("[data-box=" + getRandomInt(1, 10) + "]");
		$(chosenBox).addClass("animatedMole")
		setTimeout(function() {
			$(chosenBox).removeClass("animatedMole")
		}, 700)
		if (timer == 0) {
			clearInterval(moleTimer);
		}
	}, 900)
}