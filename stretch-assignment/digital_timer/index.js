function getDigit(num, place) {
    return ~~(num % Math.pow(10, 1 + place) / Math.pow(10, place));
}

function makeTimer(start, step, stop, digitsobj) {
    let ms = start;
    let digits = Object.entries(digitsobj).map(([id, digit]) => [document.getElementById(id), digit]);
    function setDigits(ms) {
        digits.forEach(function([elem, digit]) {
            elem.textContent = getDigit(ms, digit);
        });
    }
    let timer = setInterval(function() {
        ms += step;
        if (ms === stop) {
            digits.forEach((pair) => pair[0].style.color = "red");
            clearInterval(timer);
        }
        setDigits(ms);
    }, Math.abs(step));
    return timer;
}

window.onload = () => makeTimer(10000, -10, 0, {"msTens": 1, "msHundreds": 2, "secondOnes": 3, "secondTens": 4});
