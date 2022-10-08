/*console.log("Hello World");

let miVariable = "Hola Mundo";
console.log(miVariable);

//mutabilidad
miVariable = "Esto ha cambiado";
console.log(miVariable);

//boolean
let miBoolean = true;
console.log(miBoolean);

//number
let miNumber = 1;
console.log(miNumber);

//null
let miNull = null;
console.log(miNull);*/

//Object vacio
const miPrimerObjeto = {};

//Objeto
const miObjeto = {
  unNumero: 12,
  unString: "Hola Mundo",
  unBoolean: true,
};
//console.log(miObjeto);

const arrVacio = [];
const arr = [1, 2, "hola", 4, miObjeto];

/*console.log(arrVacio);
console.log(arr);*/
arr.push(5);
//console.log(arr);

//Igualdades
const resultado = 1 == "1"; //Comparacion no estricta
const resultado2 = 1 === "1"; //Comparacion estricta
const resultado3 = 1 != "1"; //Diferencia no estricta
const resultado4 = 1 !== "1"; //Diferencia estricta

const resultado5 = 1 < 2;
const resultado6 = 1 > 2;
const resultado7 = 1 <= 2;
const resultado8 = 1 >= 2;

//Operadores logicos or ||, and &&, not !
const resultado9 = 1 < 2 || 1 > 2;
const resultado10 = 1 < 2 && 1 > 2;
const resultado11 = !(1 < 2);

//Condicionales
if (4 < 2) {
  console.log("Es verdadero");
} else if (1 > 2) {
  console.log("Es falso");
} else {
  // console.log("Es falso \n\ n");
}

//Control de flujo: while
let i = false;
while (i) {
  console.log("Hola Mundo");
  i = false;
}

//Control de flujo: switch
switch (1) {
  case 1:
    console.log("Es verdadero");
    break;
  case 2:
    console.log("Es falso");
    break;
  default:
    console.log("Es falso");
}

//Control de flujo: for
for (let i = 0; i < 10; i++) {
  console.log(i);
}
