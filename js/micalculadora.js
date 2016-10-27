// aca va el codigo
var display = document.getElementById('display');

// Variables para calcular
var numero1 = '';
var numero2 = '';
var operacion = null;

function agregar(term) {
	if (display.innerHTML == '0') {
		display.innerHTML = term;
	} else if (term == '*') {
		display.innerHTML += '×';
	} else if (term == '/') {
		display.innerHTML += '÷';
	} else {
		display.innerHTML += term;
	}

	// caso de que se agrega el operador
	// agrego la operacion
	if (term == '+') {
		operacion = function(a,b) { return a+b;}
	} else if (term == '-') {
		operacion = function(a,b) { return a-b;}
	} else if (term == '*') {
		operacion = function(a,b) { return a*b;}
	} else if (term == '/') {
		operacion = function(a,b) { return a/b;}

	} else if (operacion === null) {
		numero1 += term;

	} else {
		numero2 += term;
	}

}

function calcular() {
	var num1 = parseInt(numero1);
	var num2 = parseInt(numero2);
	var resultado = operacion(num1, num2);

	display.innerHTML = resultado.toString();
}

function borrar() {
	display.innerHTML = '0';
	numero1 = '';
	numero2 = '';
	operacion = null;
}