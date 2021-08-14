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
            // change button text to reset game
            $("#startreset").html("Reset Game");
            // start sending fruits
            startAction();
        }
    });

});

// functions 
function addHearts() {
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
}

// generate a random fruit
function chooseFruit() {
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(5*Math.random())] + '.png')
}