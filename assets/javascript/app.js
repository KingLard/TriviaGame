var gameScreenCode = '<div class="row"><div class="col-lg-12"><h1 class="display-4 startHeader">disney pixar trivia game</h1></div></div><div class="row"><div class="col-lg-12"><img id="questionImage" src="" alt="game image"></div></div><div class="row"><div class="col-lg-12"><div id="question" class="questionText"></div></div></div><div class="row"><div class="col-lg-8"><div id="answers" class="questionText"><ul><li><button type="button" value="1" id="answer1" class="btn btn-primary"></button></li><li><button type="button" id="answer2" value="2" class="btn btn-primary"></button></li><li><button type="button" id="answer3" value="3" class="btn btn-primary"></button></li><li><button type="button" id="answer4" value="4" class="btn btn-primary"></button></li></ul></div></div><div class="col-lg-4"><div id="timer" class="questionText"></div></div></div>';   
var correctAnswers = 0;
var incorrectAnswers = 0;
var questionAnswered = true;
var timeLeft;
var n = 10;


var questionArray = [{
    name: "monsters1",
    image: "https://images.metadata.sky.com/pd-image/7eee14a3-093b-4492-9599-462899b3b567/16-9",
    question: "What fraternity does Mike Wazowski join in 'Monsters University'?",
    answer1: "Roar Omega Roar",
    answer2: "Sigma Fear Omega",
    answer3: "Oozma Kappa",
    answer4: "Alpha Scarems",
    rightAnswerValue: "3"
}, {
    name: "toystory1",
    image: "https://www.snopes.com/tachyon/2015/01/toystory3b.jpg",
    question: "In the movie 'Toy Story', which character said, \"to infinity and beyond!\"",
    answer1: "Rex",
    answer2: "Buzz Lightyear",
    answer3: "Claw Machine Aliens",
    answer4: "Woody",
    rightAnswerValue: "2"
}, {
    name: "boundin1",
    image: "https://i.ytimg.com/vi/xpeXhIAzALg/maxresdefault.jpg",
    question: "A dancing sheep must rediscover his zest for life in this Pixar short.",
    answer1: "Boundin'",
    answer2: "Fandango!",
    answer3: "To Twirl",
    answer4: "Jump!",
    rightAnswerValue: "1"
}, {
    name: "walle1",
    image: "https://cdn.vox-cdn.com/thumbor/DUP2JhIEkY0yvu0RLcy34ipj6Z0=/0x0:1200x808/1200x800/filters:focal(475x111:667x303)/cdn.vox-cdn.com/uploads/chorus_image/image/55061015/wall_ecover.0.jpg",
    question: "In the movie 'Wall-E', what is Wall-E's primary function?",
    answer1: "Loading and unloading",
    answer2: "Maintenance robot",
    answer3: "Garbage compactor",
    answer4: "Alert Earth survivors of new life",
    rightAnswerValue: "3"
}, {
    name: "toystory2",
    image: "https://carboncostume.com/wordpress/wp-content/uploads/2019/01/sid-toystory.jpg",
    question: "What is the name of the boy who terrifies the toys in 'Toy Story'?",
    answer1: "Al",
    answer2: "Andy",
    answer3: "Sid",
    answer4: "Buster", 
    rightAnswerValue: "3"
}, {
    name: "walle2",
    image: "https://waste4change.com/wp-content/uploads/5a7f3bf3-689c-49ac-8623-6aae3a692acb.jpg",
    question: "On What planet was Wall-E stranded at the beginning of 'Wall-E'",
    answer1: "Wall-E World",
    answer2: "Earth",
    answer3: "Mars",
    answer4: "It didn't have a name",
    rightAnswerValue: "2" 
}, {
    name: "up1",
    image: "https://media1.popsugar-assets.com/files/thumbor/cMy89IkOxHThHZ1hx2Hq2eoaWc8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/08/29/765/n/1922243/af5e161450458e6b_MCDUPUP_EC052_H/i/Up-Carl-Russell-Dug.JPG",
    question: "What is the name of the talking dog in 'Up'?",
    answer1: "Dug",
    answer2: "Russel",
    answer3: "Karl",
    answer4: "Pete",
    rightAnswerValue: "1" 
}, {
    name: "monsters2",
    image: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/mv5bmtyxnzc1odk4nf5bml5banbnxkftztcwnzq4mdiynw._v1_sx1777_cr001777990_al_.jpg",
    question: " What does Boo call Sulley in 'Monsters Inc.'?",
    answer1: "Fuzzy",
    answer2: "Kitty",
    answer3: "Doggy",
    answer4: "Bear",
    rightAnswerValue: "2"
}, {
    name: "ratatouille1",
    image: "https://static1.squarespace.com/static/57e05e534402434aa0f846c2/582bbe73e58c626562109436/59551a69e6f2e1acc54f9c67/1498751795564/ratatouille-4.jpg?format=1000w",
    question: "What is the name of the food critic in 'Ratatouille'?",
    answer1: "Anton Ego",
    answer2: "Auguste Gustea",
    answer3: "Alfredo Linguini",
    answer4: "Colette Tatou", 
    rightAnswerValue: "1"
}, {
    name: "cars1",
    image: "https://vignette.wikia.nocookie.net/disney/images/7/71/Cars-disneyscreencaps_com-3339.jpg/revision/latest?cb=20150423215942",
    question: "In the movie 'Cars', what color was mater before he turned rusty?",
    answer1: "Brown",
    answer2: "Yellow",
    answer3: "Red",
    answer4: "Baby Blue",
    rightAnswerValue: "4" 
}];

//functions =====================================================

function nextQuestion(x) {
    $("#questionImage, #question, #answer1, #answer2, #answer3, #answer4").empty();
    n = 10;
    countDown();
    questionArray.shift();
    $("#questionImage").attr("src", questionArray[x].image);
    $("#question").append(questionArray[x].question);
    $("#answer1").append(questionArray[x].answer1);
    $("#answer2").append(questionArray[x].answer2);
    $("#answer3").append(questionArray[x].answer3);
    $("#answer4").append(questionArray[x].answer4);
    
}

//Start Countdown Function--------------------------------------

function countDown(){
    n--;
    if(n > 0){
       setTimeout(countDown,1000);
       questionAnswered = false;
    }
    else if(n == 0) {
        $("#rightOrWrong").text("Time's Up!");
        $("#modal").modal("show");
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
    $("#questionImage").attr("src", questionArray[0].image);
    $("#question").append(questionArray[0].question);
    $("#answer1").append(questionArray[0].answer1);
    $("#answer2").append(questionArray[0].answer2);
    $("#answer3").append(questionArray[0].answer3);
    $("#answer4").append(questionArray[0].answer4);
    
    countDown();
});



$("#nextQuestion").on("click", function() {
        
        nextQuestion(0);
        
        

    
    
}); 

$("#answer1").on("click", function() {
    var value = this.val()
    console.log(value);
});







//start timer of 10 seconds

//display timer on page

//display first question

//if timer runs out display incorrect

//when answer is clicked determine if answer is correct

//tell the user if the answer was correct or incorrect

//add 1 to correct or incorrect variable

//display a button to go on to the next question

