let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let ms = date.getMilliseconds();

    // Hour hand (minute effect added)
    let hRotation = 30 * hh + mm / 2;

    // Minute hand (second effect added → smooth)
    let mRotation = 6 * mm + ss * 0.1;

    // Second hand (millisecond effect → ultra smooth)
    let sRotation = 6 * ss + ms * 0.006;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

/* ❌ ERROR FIX #1: Initial call missing */
displayTime(); // page load होते ही clock चलेगा

/* ⏱ Smooth movement के लिए short interval */
setInterval(displayTime, 50);
