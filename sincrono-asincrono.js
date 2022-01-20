/*Codigo sincrono */

let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/*Codigo asincrono */
let variableAsincrona;

setTimeout(() => {
    variableAsincrona = 10 * 3;
    console.log(variableAsincrona);

},2000);//para ejercutar la funcion 2 seg.. despues

console.log(variableAsincrona);

//JASON = JavaScript Object Notation
//http = protocolo de transferencia de hipertexto
//fetch nos permite hacer una peticion a http y vamos a obtener una respuesta

