import {Animal}  from "./animal.js";

export default class Mascota extends Animal {
  constructor(nombre, tipo, edad, sexo, hambre) {
    super(tipo, edad, sexo, hambre);
    this.nombre = nombre;
  }
}
