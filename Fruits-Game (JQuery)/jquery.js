let playing = false;
let score;
let trialsLeft;
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
        }
    });

});

// functions 
function addHearts() {
    for (let i = 0; i < trialsLeft; i++) {
        $("#trialsLeft").append(" &#10084; ");
    }
}