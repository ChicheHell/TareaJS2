// Felipe Conde
// Tarea n2 JavaScript
// DESARROLLO WEB FULL STACK


// 1. Crea un programa que tome un número como argumento y devuelva "par" si el
// número es par o "impar" si el número es impar.

function determinarParImpar(numero) {
if (numero % 2 === 0) {
    return "par";
} else {
    return "impar";
}
}
console.log(`4 = ${determinarParImpar(4)}`);  // Par
console.log(`7 =  ${determinarParImpar(7)}`);  // Impar


// 2. Crea un programa que tome un número como argumento y devuelva "positivo" si el
// número es mayor que cero o "negativo" si el número es menor que cero.

function determinarPositivoNegativo(numero) {
if (numero > 0) {
    return "positivo";
} else {
    return "negativo";
}
}
console.log(`5 =  ${determinarPositivoNegativo(5)}`);   // Positivo
console.log(`-2 =  ${determinarPositivoNegativo(-2)}`);  // Negativo

// 3. Crea un programa que tome un string como argumento y devuelva "largo" si el
// string tiene más de 10 caracteres o "corto" si el string tiene 10 caracteres o menos.

function determinarLargoCorto(texto) {
if (texto.length > 10) {
    return "largo";
} else {
    return "corto";
}
}
console.log(`Aprobado =  ${determinarLargoCorto("Aprobado")}`);            // Corto
console.log(`Este es un texto largo =  ${determinarLargoCorto("Este es un texto largo")}`);  // Largo

// Arrays:

// 1. Crea un array con los números del 1 al 10 y muestra cada uno de los elementos en
// la consola.

const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numerosArray.length; i++) {
console.log(numerosArray[i]);
}

// 2. Crea un array con los nombres de tus tres mejores amigos y muestra cada uno de
// ellos en una lista en tu página web.

const amigos = ["Amigo1", "Amigo2", "Amigo3"];
for (let i = 0; i < amigos.length; i++) {
document.write("<li>" + amigos[i] + "</li>");
}

// 3. Crea un array con las edades de tus familiares y amigos cercanos y calcula la edad
// promedio.

const edades = [25, 30, 40, 50];  // Ejemplo de edades
let sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
sumaEdades += edades[i];
}
const promedioEdades = sumaEdades / edades.length;
console.log(`Edad promedio: ${promedioEdades}`);

// Bucle for con arrays:

// 1. Crea un array con los nombres de tus cinco colores favoritos y muestra cada uno de
// ellos en la consola.

const colores = ["Rojo", "Azul", "Verde", "Amarillo", "Naranja"];
for (let i = 0; i < colores.length; i++) {
console.log(colores[i]);
}

// 2. Crea un array con los nombres de tus cinco frutas favoritas y muestra cada uno de
// ellos en una lista en tu página web.

const frutas = ["Manzana", "Plátano", "Naranja", "Sandía", "Piña"];
for (let i = 0; i < frutas.length; i++) {
document.write(`<li>${frutas[i]}</li>`);
}

// 3. A partir del array a continuación: [1, 4, 6, 7, 20, 18] crea un programa que los ordena
// de menor a mayor recorriendolos. (No usar sort). Pista: for anidado.

const numeros = [1, 4, 6, 7, 20, 18];
const longitud = numeros.length;
for (let i = 0; i < longitud - 1; i++) {
for (let j = 0; j < longitud - 1 - i; j++) {
if (numeros[j] > numeros[j + 1]) {
    // Intercambiar los elementos
    const temp = numeros[j];
    numeros[j] = numeros[j + 1];
    numeros[j + 1] = temp;
        }
    }
}
console.log(numeros);  // [1, 4, 6, 7, 18, 20]

// Funciones:

// 1. Suma de números pares: Escribe una función llamada sumarNumerosPares que
// reciba un número entero n y devuelva la suma de todos los números pares desde 1
// hasta n. Por ejemplo, si se llama a la función con el argumento 6, debería devolver
// 12 (2 + 4 + 6).

function sumarNumerosPares(n) {
let suma = 0;
for (let i = 2; i <= n; i += 2) {
    suma += i;
}
return suma;
}
console.log(sumarNumerosPares(6));  // 12


// 2. Calculadora de impuestos: Escribe una función llamada calcularImpuestos que
// calcule la cantidad de impuestos a pagar dada una cantidad de dinero monto. La
// función debe aplicar un impuesto del 20% a los montos mayores o iguales a 1000 y
// un impuesto del 10% a los montos menores a 1000. Por ejemplo, si se llama a la
// función con el argumento 1500, debería devolver 300 (20% de 1500).

function calcularImpuestos(monto) {
if (monto >= 1000) {
    return monto * 0.2; // Impuesto del 20% para montos mayores o iguales a 1000
} else {
    return monto * 0.1; // Impuesto del 10% para montos menores a 1000
}
}
console.log(calcularImpuestos(1500));  // 300


// 3. Contador de vocales: Escribe una función llamada contarVocales que reciba una
// cadena de texto y cuente la cantidad de vocales que contiene. La función debe
// devolver el número total de vocales encontradas. Puedes asumir que la cadena de
// texto solo contiene letras en minúsculas y sin caracteres especiales. Por ejemplo, si
// se llama a la función con el argumento 'javascript', debería devolver 3.

function contarVocales(texto) {
const vocales = "aeiou";
let contador = 0;
for (let i = 0; i < texto.length; i++) {
    if (vocales.includes(texto[i])) {
    contador++;
    }
}
return contador;
}
console.log(contarVocales("javascript"));  // 3

// 4. Generador de contraseñas: Escribe una función llamada generarContraseña que
// genere una contraseña aleatoria de longitud n. La contraseña debe contener una
// combinación de letras mayúsculas, letras minúsculas, números y caracteres
// especiales. Puedes usar la función Math.random() para generar valores aleatorios y
// el método String.fromCharCode() para convertir códigos de caracteres en caracteres
// reales. Por ejemplo, si se llama a la función con el argumento 8, podría devolver
// 'A2$bF9z%'

function generarContraseña(longitud) {
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
let contraseña = "";
for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres.charAt(indice);
}
return contraseña;
}
console.log(generarContraseña(8));  // 'A2$bF9z%'
