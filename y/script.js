window.addEventListener('load', (event) => {
    setTimer();
    let currTime = new Date();
    document.getElementById("currentTime").innerHTML = currTime.toLocaleDateString("cs-CZ") + " " + currTime.toLocaleTimeString("cs-CZ");
    showTime();
});

function setTimer() {
    var minTime = 26100;
    var maxTime = 69300;
    var currDate = new Date();
    currTime = currDate.getSeconds() + currDate.getMinutes() * 60 + currDate.getHours() * 3600;
    if (currDate.getDay() <= 5) {
        if (currTime >= minTime && currTime <= maxTime) {
            let row = document.getElementById(currDate.getDay());
            console.log(row.id);
            let marker = document.getElementById('timeIndicator');
            switch (currDate.getDay()) {
                case 1:
                    var timeFraction = (currTime - minTime) / (maxTime - minTime);
                    var width = row.getBoundingClientRect()['width'] - document.getElementById('th_column').getBoundingClientRect()['width'];
                    var position = width * timeFraction;
                    marker.style.top = row.getBoundingClientRect()['top'] + 'px';
                    marker.style.left = position + 'px';
                    break;
                case 2:
                    var timeFraction = (currTime - minTime) / (maxTime - minTime);
                    var width = row.getBoundingClientRect()['width'] - document.getElementById('th_column').getBoundingClientRect()['width'];
                    var position = width * timeFraction;
                    marker.style.top = row.getBoundingClientRect()['top'] + 'px';
                    marker.style.left = position + 'px';
                    break;
                case 3:
                    var timeFraction = (currTime - minTime) / (maxTime - minTime);
                    var width = row.getBoundingClientRect()['width'] - document.getElementById('th_column').getBoundingClientRect()['width'];
                    var position = width * timeFraction;
                    marker.style.top = row.getBoundingClientRect()['top'] + 'px';
                    marker.style.left = position + 'px';
                    break;
                case 4:
                    var timeFraction = (currTime - minTime) / (maxTime - minTime);
                    var width = row.getBoundingClientRect()['width'] - document.getElementById('th_column').getBoundingClientRect()['width'];
                    var position = width * timeFraction;
                    marker.style.top = row.getBoundingClientRect()['top'] + 'px';
                    marker.style.left = position + 'px';
                    break;
                case 5:
                    var timeFraction = (currTime - minTime) / (maxTime - minTime);
                    var width = row.getBoundingClientRect()['width'] - document.getElementById('th_column').getBoundingClientRect()['width'];
                    var position = width * timeFraction;
                    marker.style.top = row.getBoundingClientRect()['top'] + 'px';
                    marker.style.left = position + 'px';
                    break;
                default:
                    console.log('def');
            }
        }
    }
}

function showTime() {
    setInterval(temp, 1000);
}

function temp() {
    let currTime = new Date();
    let time = currTime.toLocaleDateString("cs-CZ") + " " + currTime.toLocaleTimeString("cs-CZ");
    document.getElementById("currentTime").innerHTML = time;
    setTimer();
}


function highlightClass(classToHighlight, classToHide) {
    let cells = document.getElementsByClassName(classToHighlight);
    for (i = 0; i < cells.length; i++) {
        cells[i].style.opacity = 1;
    }
    cells = document.getElementsByClassName(classToHide);
    for (i = 0; i < cells.length; i++) {
        cells[i].style.opacity = 0.4;
    }
}

function showAll() {
    let cells = document.getElementsByClassName("seminar");
    for (i = 0; i < cells.length; i++) {
        cells[i].style.opacity = 1;
    }
    cells = document.getElementsByClassName("lecture");
    for (i = 0; i < cells.length; i++) {
        cells[i].style.opacity = 1;
    }
}