let action
let step;
let playing = false;
let score;
let trialsLeft;
let fruits = ['GreenApple', 'Lemon', 'Mango', 'Orange', 'Pineapple', 'Tomato'];
$(function(){

// click on start reset button
$("#startreset").on("click", function() {
    // we are playing
    if (playing == true) {
        // reload page
        location.reload();
    } else {
        // we are not playing
        playing = true; // game initiated
        // set store to 0
        score = 0;
        $("#scorevalue").html(score);

        // show triels left
        $("#trialsLeft").show();
        trialsLeft = 3;
        addHearts();
        // hide game over boc
        $("#gameOver").hide()
        // change button text to reset game
        $("#startreset").html("Reset Game");

        // start sending fruits
        startAction();
    }
});

$("#fruit1").on("mouseover", function() {
    // update score
    score++;
    $("#scorevalue").html(score);
    // play sound
    // document.getElementById("sliceAudio").play();
    $("#sliceAudio")[0].play();
    // stop fruit
    clearInterval(action);
    // hide it
    $("#fruit1").hide("explode", 500);
    // send new fruit
    setTimeout(startAction, 500);

});


// functions 
function addHearts() {
    $("#trialsLeft").empty();
    for (let i = 0; i < trialsLeft; i++) {
        $("#trialsLeft").append(" &#10084; ");
    }
}

function startAction() {
    // var greenApple = '<img src="images/GreenApple.png" alt="apple" class="fruits">';
    // $("#fruitsContainer").append(greenApple);
    $("#fruit1").show();
    chooseFruit(); // choose a randon fruit
    $('#fruit1').css({'left': Math.round(550*Math.random()), 'top': -50});
    // random position

    //  generate a random step
    // step = 0;
    step = 1+Math.round(3*Math.random()); // change step

    // move fruit down vy one step every 10ms
    action = setInterval(function() {
        $("#fruit1").css('top', $('#fruit1').position().top + step);
        
        // check if fruit is too low
        if($('#fruit1').position().top > $("#fruitsContainer").height()) {
            // check if we have trials left
            if (trialsLeft > 1) {
                // reduce trials by one
                trialsLeft--;
                startAction();
                //  pipulate trialsLeft box
                
                addHearts();
            } else {
                // we are not playing anymore
                playing = false;
                $("#startreset").html("Start Game");
                // show game over bannar
                $('#gameOver').show();
                // change button to show start game
                $("#gameOver").html('<p>GameOver!</p><p>Your score is '+ score +'</p>');

                $("#trialsLeft").hide();

                stopAction();

            }
        }
    }, 10);

}

function stopAction() {
    // stop dropping fruits
    clearInterval(action);
    $("#fruit1").hide();
}

// generate a random fruit
function chooseFruit() {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(5*Math.random())] + '.png')
}

});