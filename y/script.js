var classSource = "";

window.addEventListener('load', (event) => {
    //setTimer();
    let currTime = new Date();
    document.getElementById("currentTime").innerHTML = currTime.toLocaleDateString("cs-CZ") + " " + currTime.toLocaleTimeString("cs-CZ");
    showTime();
});

function closeDialog() {
    document.getElementById("noteDialog").open = false;
    var notesHTML = document.getElementById("notes");
    while (notesHTML.hasChildNodes()) {
        notesHTML.removeChild(notesHTML.lastChild);
    }
}

function noteClicked(id) {
    var isOpen = document.getElementById("noteDialog").open;
    if (isOpen) {
        closeDialog();
    } else {
        document.getElementById("noteDialog").open = true;
        classSource = id;
        var notesHTML = document.getElementById("notes");
        for (var i = 0; i < localStorage.length; i++) {
            var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
            if (item["source"] == classSource) {
                notesHTML.append(localStorage.key(i) + ": " + item["value"]);
                notesHTML.appendChild(document.createElement('br'));
            }
        }
    }
}

function saveNote() {
    var note = document.getElementById("noteText").value;
    var time = new Date();
    var json = JSON.stringify({ "source": classSource.toString(), "value": note.toString() });
    localStorage.setItem(time.toLocaleDateString("cs-CZ") + " " + time.toLocaleTimeString("cs-CZ"), json);
    document.getElementById("noteText").value = "";
    closeDialog();
}

function showTime() {
    setInterval(() => {
        let currTime = new Date();
        let time = currTime.toLocaleDateString("cs-CZ") + " " + currTime.toLocaleTimeString("cs-CZ");
        document.getElementById("currentTime").innerHTML = time;
        //setTimer();
    }, 1000);
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