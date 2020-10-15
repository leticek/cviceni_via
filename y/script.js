function showLecture() {
    let cells = document.getElementsByClassName("lecture");
    for (i = 0; i < cells.length; i++) {
        cells[i].style.opacity = 1;
    }

    cells = document.getElementsByClassName("seminar");
    for (i = 0; i < cells.length; i++) {
        cells[i].style.opacity = 0.4;
    }
}

function showSeminar() {
    let cells = document.getElementsByClassName("seminar");
    for (i = 0; i < cells.length; i++) {
        cells[i].style.opacity = 1;
    }

    cells = document.getElementsByClassName("lecture");
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