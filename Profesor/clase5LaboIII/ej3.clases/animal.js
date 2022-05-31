export class Animal {
    #hambre;
    constructor(tipo, edad, sexo, hambre) {
      this._sexo = sexo;
      this.tipo = tipo;
      this.edad = edad;
      this.#hambre = hambre;
    }
  
    get sexo() {
      return this._sexo;
    }
  
    set sexo(value) {
      this._sexo = value;
    }
    get Hambre() {
      return this.#hambre;
    }
  
    set Hambre(value) {
      if (value == true || value == false) {
        this.#hambre = value;
      }
    }
  
    saludar() {
      console.log(
        "Hola soy un animal de tipo " + this.tipo + " y mi sexo es " + this.sexo
      );
    }
  }


  

  
  