"use strict";
var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var btn = document.getElementById('btn');
var color = document.querySelector('.color');
btn.addEventListener('click', function () {
    getColor(function (x) {
        color.textContent = x;
        //Le asignamos el color al document
        document.body.style.backgroundColor = x;
    });
});
function getColor(cb) {
    var hexColor = "#";
    for (var i = 0; i < 6; i++) {
        hexColor += hexValues[getRandomNumber()];
    }
    cb(hexColor);
}
function getRandomNumber() {
    return Math.floor(Math.random() * hexValues.length);
}
