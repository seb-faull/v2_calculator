document.addEventListener('DOMContentLoaded', function (event) {
//All Global variables, loops etc gets put in here ---- for today...

var num1 = NaN;
var operator = NaN;
var num2 = NaN;
var ans = NaN;

var numbers = document.getElementsByClassName('number');
var operators = document.getElementsByClassName('operator');
var equals = document.getElementsByClassName('eq');
var cancel = document.getElementsByClassName('clear');

var display = document.getElementsByClassName('display');

function operators () {
	for (i = 0; i < operators.length; i++) {
		operators[i].addEventListener('click', function (event) {

			var operatorInput = event.target.value

			console.log(event.target.value);
		})
	}
}

function equals () {

}

function cancel () {
	
}

function activateNumbers () {
	for (i = 0; i < numbers.length; i++) {
		numbers[i].addEventListener('click', function (event) {

			// var numInput = event.target.value
			// if (!operator) {
			// 	num1Button = event.target.value;
			// 	display[i].value = num1Button;
			// } else {
			// 	num2Button = event.target.value;
			// 	display[i].value = num2Button;
			// }
			display[0].value = event.target.value;
			console.log(event.target.value);
		})
	}
}

activateNumbers();

});