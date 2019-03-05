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
            digits.forEach((pair) => pair[0].classList.add("finished"));
            new Audio('3d_ping.wav').play();
            clearInterval(timer);
            timerLock = null;
        }
        setDigits(ms);
    }, Math.abs(step));
    return timer;
}

let timerLock;

function startTimer() {
    if (!timerLock) {
        document.querySelectorAll(".timer .digit").forEach(e => e.classList.remove("finished"));
        let length = document.getElementById("length").value * 1000;
        let digitobj = parseFormat(document.getElementById("format").value);
        timerLock = makeTimer(0, 10, length, digitobj);
    } else {
        document.querySelector(".timer button").classList.add("shake");
        setTimeout(() => document.querySelector(".timer button").classList.remove("shake"), 1000);
    }
}

function parseFormat(formatstr) {
    let digits = document.querySelector(".digits");
    while (digits.firstChild) digits.removeChild(digits.firstChild);
    let digitobj = {};
    formatstr.split("").forEach(function (c) {
        if (c === "s") {
            let tens = document.createElement("div");
            tens.classList.add("digit");
            tens.id = "secondTens";
            tens.textContent = "-";
            digitobj["secondTens"] = 4;
            digits.appendChild(tens);
            let ones = document.createElement("div");
            ones.classList.add("digit");
            ones.id = "secondOnes";
            ones.textContent = "-";
            digitobj["secondOnes"] = 3;
            digits.appendChild(ones);
        } else if (c === "u") {
            let tens = document.createElement("div");
            tens.classList.add("digit");
            tens.id = "msHundreds";
            tens.textContent = "-";
            digits.appendChild(tens);
            digitobj["msHundreds"] = 2;
            let ones = document.createElement("div");
            ones.classList.add("digit");
            ones.id = "msTens";
            ones.textContent = "-";
            digitobj["msTens"] = 1;
            digits.appendChild(ones);
        } else if (c == "m") {
            let tens = document.createElement("div");
            tens.classList.add("digit");
            tens.id = "minuteTens";
            tens.textContent = "-";
            digits.appendChild(tens);
            digitobj["minuteTens"] = 6;
            let ones = document.createElement("div");
            ones.classList.add("digit");
            ones.id = "minuteOnes";
            ones.textContent = "-";
            digitobj["minuteOnes"] = 5;
            digits.appendChild(ones);
        } else {
            let elem = document.createElement("div");
            elem.classList.add("digit");
            elem.textContent = c;
            digits.appendChild(elem);
        }
    });
    return digitobj;
}

// window.onload = () => makeTimer(10000, -10, 0, {"msTens": 1, "msHundreds": 2, "secondOnes": 3, "secondTens": 4});
