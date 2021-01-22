var strVar = 'String';
var intVar = 22;
var floatVar = 22.9;
var booleanVar = false;
var objVar = {};
var arrVar = [];

console.log( typeof intVar.toString() );
console.log( intVar.toString() );

console.log(strVar);
strVar = 'Danilo';
console.log(strVar);

/*
const constVar = 'Const';
console.log(constVar);
constVar = 'Alterado';
console.log(constVar);
*/

console.log( typeof arrVar );

const valor1 = 1.0;
const valor2 = Number('2.0');

console.log( Number.isInteger(valor1) );

const valor3 = 1.0;
const valor4 = '1.0';

if ( valor3 == valor4 ) {
  console.log('sim');
} else {
  console.log('não');
}

if ( valor3 === valor4 ) {
  console.log('sim');
} else {
  console.log('não');
}