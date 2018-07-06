var number = 3;
var operator = "another";
var i = 1;
var msg = '';

if (operator ==='addition') {
    while (i < 11) {
        msg += i + ' + ' + number + ' = ' + (i + number) + '<br>';
        i++;
    }
} else {
    while (i < 11) {
        msg += i + " * " + number + ' = ' + (i * number) + '<br>';
        i++;
    }
}

document.getElementById('blackboard').innerHTML = msg;