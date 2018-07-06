var pass = 50;
var score = 15;
var msg;

if (score >= pass) {
    msg = 'Gratulacje! Zaliczyłeś test!';
} else {
    msg = 'Spróbuj ponownie!';
}

var el = document.getElementById('answer');
el.textContent = msg;