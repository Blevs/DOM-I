function getDigit(num, place) {
    return ~~(num % Math.pow(10, 1 + place) / Math.pow(10, place));
}

function makeTimer(startms, stepms, stopms, digitsobj) {
    let ms = startms;
    let step = stepms;
    let stop = stopms;
    let digits = Object.entries(digitsobj);
    function setDigits(ms) {
        digits.forEach(function([id, digit]) {
            document.getElementById(id).textContent = getDigit(ms, digit);
        });
    }
    setInterval(function() {
        ms += step;
        if (ms === stop) {
            digits.forEach(([id, _]) => document.getElementById(id).style.color = "red");
            step = 0;
        }
        setDigits(ms);
    }, Math.abs(stepms));
}

let timer = makeTimer(0, 10, 10000, {"msTens": 1, "msHundreds": 2, "secondOnes": 3, "secondTens": 4});
