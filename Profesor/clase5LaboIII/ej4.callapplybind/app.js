
let nombre = "Maria";
let edad = 30;

const perro ={
    nombre:"Bobby",
    edad:3
}

const pepe = {
    nombre:"Jose",
    edad:50
}


const persona = {
  nombre: "Juan",
  edad: 20,
  saludar: function(valor){
   // console.log(this);
    console.log(`Hola soy ${this.nombre + valor} y tengo ${this.edad} años`);
  },
};

  
const miFuncion = persona.saludar;


persona.saludar(" Perez");

miFuncion.call(persona, " Gomez");
miFuncion.call(perro, " Felipe");
miFuncion.apply(pepe, [" Argento"]);

const otraFuncion = miFuncion.bind(perro);

otraFuncion(" Bobby");
