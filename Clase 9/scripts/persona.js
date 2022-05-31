class Persona{
    constructor(id,nombre,edad,email,sexo){
        this.Id = id;
        this.Nombre = nombre;
        this.Edad = edad;
        this.Email = email;
        this.Sexo = sexo;
    }

    set Id(value)
    {
        if((value!=null && value!=undefined && value!=="")&&typeof parseInt(value,10) === "number" && value>0)
        {
            this.id=value;
        }
        else
        {
            throw ("Id incorrecto");
        }
    }
    set Nombre(value)
    {
        if((value!=null && value!=undefined&& value!=="")&&typeof value === "string" && value.length<40)
        {
            this.nombre=value;
        }
        else
        {
            throw ("Nombre no formado por ASCII o mas de 40 caracteres");
        }
    }
    set Edad(value)
    {
        if((value!=null && value!=undefined&& value!=="")&&typeof parseInt(value,10) === "number" && value < 150 && value > 0)
        {
            this.edad = value;
        }
        else
        {
            throw ("NaN");
        }
    }
    set Email(value)
    {
        if((value!=null && value!=undefined&& value!=="")&&typeof value === "string")
        {
            this.email=value;
        }
        else
        {
            throw ("Email vacio o incorrecto");
        }
    }
    set Sexo(value)
    {
        if((value!=null && value!=undefined&& value!=="")&&typeof value === "string" && (value == "masculino" || value == "femenino"))
        {
            this.sexo = value;
        }
        else
        {
            throw ("sexo incorrecto o vacio");
        }
    }


}

export default Persona;