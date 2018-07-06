var score = 75;
var pass = 50;
var msg = '';

function congratulate() {
    msg += 'Gratulacje! ';
}

if (score >= pass) {
    congratulate();
    msg += "Przechodzisz do następnej rundy!";
}

var el = document.getElementById('answer');
el.textContent = msg;