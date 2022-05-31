const obj = new Object();
console.log(obj);

const obj2 = {};
console.log(obj2);

const p1 = {
  nombre: "Juan",
  edad: 20,
  milanesa: true,
};

const p2 = {
  nombre: "Ana",
  edad: 21,
  milanesa: false,
};

p2.sexo = "f";

console.log(p1);
console.log(p2);

//const p3 = Object.assign({}, p2);

const p3 = {};
Object.assign(p3, p2);

p3.nombre = "Maria";

console.log(p2);
console.log(p3);

// let clave = "10nacion";

// console.log(p1[clave]);

//  for (const key in p3) {

//    console.log(key, p3[key]);

//  }

const claves = Object.keys(p3);
const valores = Object.values(p3);
const entradas = Object.entries(p3);

console.log(claves);

for (const i of Object.values(p3)) {
  console.log(i);
}

function Persona(nombre, sexo, edad, milanesa) {
  this.nombre = nombre;
  this.sexo = sexo;
  this.edad = edad;
  this.milanesa = milanesa;
}

const per1 = new Persona("Andrea", "f", 30, false);

let { nombre, edad } = per1;

console.log(nombre, edad);

const vec = [20, 30, 10, 34, 56, 10];

let x;
let y;
let z = vec;

console.log(x, y, z);

// const per2 = {...per1};

// console.log(per2);
// console.log(per1);
// console.log(p2);

function unaFuncion({ nombre: pepe, edad, sexo }) {
  console.log(`Te llamas ${pepe}, tenes ${edad} años y tu sexo es ${sexo}`);
}

unaFuncion(per1);

function Animal(tipo, edad, sexo = "i", hambre = false) {
  let _sexo = sexo;
  this._tipo = tipo;
  this.edad = edad;
  this.hambre = hambre;

  this.setSexo = function (value) {
    _sexo = value;
  };
  this.getSexo = function () {
    return _sexo;
  };
}

Animal.prototype.saludar = function () {
  console.log(
    "Hola soy un animal de tipo " +
      this._tipo +
      " y mi sexo es " +
      this.getSexo()
  );
};

Animal.prototype.setTipo = function (value) {
  this._tipo = value;
};

Animal.prototype.getTipo = function () {
  return this._tipo;
};

const unAnimal = new Animal("vaca", 5, "h", true);
const otroAnimal = new Animal("Leon", 3, "m", true);

console.log(unAnimal);
console.log(otroAnimal);

unAnimal.saludar();
otroAnimal.saludar();

function Mascota(nombre, tipo, edad, sexo, hambre) {
  this.nombre = nombre;

  Animal.call(this, tipo, edad, sexo, hambre);
}

Object.setPrototypeOf(Mascota.prototype, Animal.prototype);

Mascota.prototype.saludar = function () {
  console.log(
    `Hola soy una mascota, me llamo ${this.nombre} de tipo 
      ${this._tipo} y mi sexo es ${this.getSexo()}`
  );  
};

Mascota.prototype.presentacion = function(){
  console.log("Soy un metodo de la clase mascota");
}



const unaMascota = new Mascota("Oliver", "Perro", 6, "m", true);

console.log(unAnimal);
console.log(unaMascota);

unAnimal.saludar();
unaMascota.saludar();

unaMascota.presentacion();

