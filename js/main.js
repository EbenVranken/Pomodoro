var isPaused = false,
    onBreak = false;
$('.pause').on('click', function(e) {
    e.preventDefault();
    isPaused = true;
});

$('.play').on('click', function(e) {
    e.preventDefault();
    isPaused = false;
});

function startTimer(workTime, pauseTime, display) {
    var timer = workTime,
        minutes, seconds;
    var breakCount = 0;
    setInterval(function() {
        if (!isPaused) {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.querySelector(".timer").innerHTML = minutes + ":" + seconds;

            if (--timer < 0) {
                if (!onBreak) {
                    document.querySelector(".title").innerHTML = "Break";
                    timer = pauseTime
                    breakCount++;
                    onBreak = true;
                    if (breakCount >= 4) {
                        timer = workTime;
                        breakCount = 0;
                    }
                } else {
                    document.querySelector(".title").innerHTML = "Work";
                    timer = workTime;
                    onBreak = false;
                }
            }
        }
    }, 1000);
}

window.onload = function() {
    var workTime = 60 * 25;
    var pauseTime = 60 * 5;

    breakCount = 0;
    display = document.querySelector('#time');
    startTimer(workTime, pauseTime, display);
};
