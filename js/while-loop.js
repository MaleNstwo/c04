var i = 1;
var msg = '';
var b = 13;

while (i < 10) {
    msg += i + ' x ' + b + ' = ' + (i * b) + '<br>';
    i++;
}

document.getElementById('answer').innerHTML = msg;