let playing = false;
let score;
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
        document.getElementById("timeremaining").style.display = "block";
        // reduce time by 1sec in loops
        document.getElementById("startreset").innerHTML = "Reset Game";
        
    }
};

 
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