var msg;
var level = 2;

switch (level) {
case 1:
    msg = 'Powodzenia na pierwszym teście!';
    break;
case 2:
    msg = 'Drugi z trzech - jest nieźle!';
    break;
case 3:
    msg = 'Ostatnia runda - już prawie skończyłeś!';
    break;
default:
    msg = "Powodzenia";
    break;
}

var el = document.getElementById('answer');
el.textContent = msg;