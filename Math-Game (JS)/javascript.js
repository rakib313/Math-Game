let playing = false;
let score;
let action;
let timeRemaining;
//if we click on the start/reset
document.getElementById("startreset").onclick = function () {
    //if we are playing 
    if (playing === true) {
        location.reload(); //reload page
    } else { // if we are not playing
        // change mode to playing
        playing = true;

        // set score to zero
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        // show countdown box
        show("timeremaining");
        timeRemaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        // reduce time by 1sec in loops
        document.getElementById("startreset").innerHTML = "Reset Game";
        // reduce time by 1sec in loops
        // timeRemaining = 0;
        startCounter();
        // Generate new Q&A
        generateQA();
    }
};

//Clicking on an answer box

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
        //check if we are playing     
        if(playing == true){//yes
            if(this.innerHTML == correctAnswer){
            //correct answer
                
                //increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");   
                }, 1000);
                
                //Generate new Q&A
                
                generateQA();
            }else{
            //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");   
                }, 1000);
            }
        }
    }
}   

// functions

// start counter
function startCounter() {
    action = setInterval(function() {
        timeRemaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
        if (timeRemaining == 0) {
            stopCountdown();
            show("gameOver");
            document.getElementById("gameOver").innerHTML = 
            "<p>Game Over!</p> <p>Your score is " + score + 
            ".</p>";
            hide("timeremaining");
            hide("corrent");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    }, 1000);
}
// stop the counter
function stopCountdown() {
    clearInterval(action);
}

// hide an element
function hide(id) {
    document.getElementById(id).style.display = "none";
}

// show an element 
function show(id) {
    document.getElementById(id).style.display = "block";
}
// generate multiple questions and answers

function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

//if we click on the start/reset
    //if we are playing 
        // reload page
    // if we are not playing
        // set score to zero
        // show countdown box
        // reduce time by 1sec in loops
            // timeleft?
                // yes-> continue
                // no -> gameover
        // change button to reset
        //generate new Q&A


// if we click an answer box
    // if we are playing
        // corrent?
            // yes
                // increase score
                // show correct box for 1sec
                // generate new Q&A
            // no
                // show try again box for 1sec