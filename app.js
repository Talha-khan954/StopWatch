var mintHeading = document.getElementById("mins");
var hrHeading = document.getElementById("Hr");
var secHeading = document.getElementById("sec");
var milSecHeading = document.getElementById("msec");
var interval;

var milSec = 0;
var sec = 0;
var mint = 0;
var hour = 0;
// var start = 0;

function start() {
    // console.log(start)
    milSec++
    milSecHeading.innerHTML = milSec

    if (milSec === 100) {
        sec++
        secHeading.innerHTML = sec
        milSec = 0


    } else if (sec > 59) {
        mint++
        mintHeading.innerHTML = mint
        sec = 0
    } else if (mint > 59) {
        hour++
        Hr.innerHTML = hour

    };
};

function StartWatch() {
    interval = setInterval(start , 10)
};

function ResetWatch() {
    clearInterval(interval);
    mintHeading.innerHTML = "00";
    hrHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    milSecHeading.innerHTML = "00";

    milSec = 0;
    sec = 0;
    mint = 0;
    hour = 0;
};

function StopWatch(){
    clearInterval(interval)
};