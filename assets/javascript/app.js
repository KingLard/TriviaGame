var gameScreenCode = '<div class="row"><div class="col-lg-12"><h1 class="display-4 startHeader">disney pixar trivia game</h1></div></div><div class="row"><div class="col-lg-12"><img id="questionImage" src="https://lumiere-a.akamaihd.net/v1/images/eu_ts4_trailer-stories_hero_m_ff30b1d6.jpeg?region=0,0,750,663" alt="game image"></div></div><div class="row"><div class="col-lg-12"><div id="question" class="questionText">This is a movie question example to see what the size is This is a movie question example to see what the size is</div></div></div><div class="row"><div class="col-lg-8"><div id="answers" class="questionText"><p>answer one</p><p>answer one</p><p>answer one</p><p>answer one</p></div></div><div class="col-lg-4"><div id="timer" class="questionText"></div></div></div>'
var correctAnswers = 0;
var incorrectAnswers = 0;
var questionAnswered = true;
var timeLeft;
var n = 10;

//functions =====================================================



//Start Countdown Function--------------------------------------

function countDown(){
    n--;
    if(n > 0){
       setTimeout(countDown,1000);
    }
    $("#timer").html(n);
 }



//Start the game Function------------------------------------------

function startGame() {
    countDown();

}







//when start button is pressed:
$("#start").on("click", function() {
    $("#gameScreen").append(gameScreenCode);
    $(".startScreen").empty();
    countDown();
});
//start timer of 10 seconds

//display timer on page

//display first question

//if timer runs out display incorrect

//when answer is clicked determine if answer is correct

//tell the user if the answer was correct or incorrect

//add 1 to correct or incorrect variable

//display a button to go on to the next question

