// arrays

const vec = new Array();
console.log(vec);

const vec1 = [];
console.log(vec1);

const vec3 = new Array(4, 3, 6, 5, 7);
const vec4 = [3, 2, 5, 34, 6];

console.log("vec3:", vec3);
console.log("vec4:", vec4);

const vec5 = [23, "Juan", false]; // tupla

const vec6 = vec3.concat(vec4);

console.log(vec3);
console.log(vec6);
vec6.push(23);
console.log(vec3);
console.log(vec6);

// spread operator
const vec7 = [...vec4];

console.log("vec4:", vec4);
console.log("vec7:", vec7);

const vec8 = [];

// for(let i=0; i < vec4.length; i++){
//     vec8.push(vec4[i]);
// }
for (const value of vec4) {
  vec8.push(value);
}

console.log("vec4:", vec4);
console.log("vec8:", vec8);

// for (const key in vec8) {
//         console.log(key);
// }

// const vec9 = [...vec3, ...vec4];
// console.log(vec9);

const vec9 = [vec3, vec4];
console.log(vec9);
vec9[0].push(123);
console.log(vec9);
console.log(vec3);

const vec10 = [2, 4, 1, 6, 7, 8];

// console.log(vec10.unshift(33));
// console.log(vec10);

// console.log(vec10.pop());
// console.log(vec10);

// console.log(vec10.shift());
// console.log(vec10);

// console.log(vec10.indexOf(45));

// splice (empalme)

//console.log(vec10);
//let indice = vec10.indexOf(30);
//vec10.splice(-2, 2);
//console.log(vec10.slice(3,vec10.length));

console.log(vec10);
vec10.sort();
console.log(vec10);

const vec12 = ["h", "A", "a", "l"];
//vec12.sort();
console.log(vec12);

const nombres = ["Juan", "Carlos", "Pedro", "Miguelito", "Andrea"];
const empleados = [
  { nombre: "Juan", edad: 20, sexo: "m", sueldo: 140000 },
  { nombre: "Manuel", edad: 21, sexo: "m", sueldo: 240000 },
  { nombre: "Daniela", edad: 23, sexo: "f", sueldo: 340000 },
  { nombre: "Joaquin", edad: 21, sexo: "m", sueldo: 230000 },
];

vec10.sort((a, b) => {
  return b - a;
});

console.log(vec10);

nombres.sort((a, b) => {
  return a.length - b.length;
});

console.log(nombres);

// forEach

nombres.forEach((elemento) => {
  if (elemento.length == 4) {
    nombres.push("dñkjfsf");
  }
});

console.log(nombres);

// map
const vista = empleados.map((empleado) => {
  return { nombre: empleado.nombre, sueldo: empleado.sueldo };
});

console.log(vista);

// filter
const varones = empleados.filter((e) => e.sexo === "m");

console.log(varones);

// operador ternario
const duplicadosPares = vec10.map((e) => (e % 2 ? e : 2 * e));

console.log(vec10);
console.log(duplicadosPares);

const totalSueldosVarones = empleados
  .filter((e) => e.sexo === "m")
  .map((e) => e.sueldo)
  .reduce((p, a) => p + a);

console.log("Total:", totalSueldosVarones);

// reduce

const sinRepetidos = [...new Set([3, 2, 13, 6, 7, 5, 13, 7])];

console.log(sinRepetidos);

//let mayor = numeros.reduce((p, a) => (p > a ? p : a));

//console.log(mayor);

let cadena = vec12.reduce((prev, actual) => {
  return prev + actual;
}, "");

console.log(cadena);



