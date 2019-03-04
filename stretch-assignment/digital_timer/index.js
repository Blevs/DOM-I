function numPlace(num, place) {
    return ~~(num % Math.pow(10, 1 + place) / Math.pow(10, place));
}

function setDigits(ms) {
    document.getElementById("msTens").textContent = numPlace(ms, 1);
    document.getElementById("msHundreds").textContent = numPlace(ms, 2);
    document.getElementById("secondOnes").textContent = numPlace(ms, 3);
    document.getElementById("secondTens").textContent = numPlace(ms, 4);
}

function makeTimer(startms, stepms, stopms) {
    let ms = startms;
    let step = stepms;
    let stop = stopms;
    return function() {
        ms += step;
        if (ms === stop) {
            document.querySelectorAll(".digit").forEach(e => e.style.color = "red");
            step = 0;
        }
        setDigits(ms);
    };
}

let timerIntervId = setInterval(makeTimer(0, 10, 10000), 10);
