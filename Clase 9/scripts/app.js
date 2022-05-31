import { gente } from "../data/datos.js";
import { TableGenerator } from "./tableGenerator.js";
import Persosna from "./persona.js";
import Persona from "./persona.js";
const table = document.querySelector(".table-container");
const personasBackup = localStorage.getItem("personas")?JSON.parse(localStorage.getItem("personas")):[];
let personas = personasBackup;
const formPersona = document.querySelector(".form-personas");
const btnEliminar = document.getElementById("btnEliminar");
const btnCancelar = document.getElementById("btnCancelar");
actualizarTabla(personas);

// SUBMIT CAMBIADO
formPersona.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    if(btnEliminar.hidden && btnCancelar.hidden)
    {

        try
        {
            const persona = new Persona(Date.now(),formPersona.nombre.value,formPersona.edad.value,formPersona.email.value,formPersona.sexo.value);
            if(personas!=null)
            {
                personas.push(persona);
            }
            else
            {
                personas = new Array(persona);
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }
    else
    {
        modifyRow(searchRow(formPersona.id.value),[formPersona.nombre.value,formPersona.edad.value,formPersona.email.value,formPersona.sexo.value]);
        saveToLocalStorage();
    }
    localStorage.setItem("personas",JSON.stringify(personas));
    formPersona.nombre.value="";
    formPersona.edad.value="";
    formPersona.email.value="";
    formPersona.sexo.value="";
    formPersona.id.value="";
    actualizarTabla(personas);
});

function modifyRow(row,values)
{
    if(row!=null)
    {

        const firstValue = row.firstElementChild;
        let value = firstValue;
        for(let i=0;i<values.length;i++)
        {
            if(value!=null)
            {
                value.textContent=values[i];
                value = value.nextElementSibling;
            }
        }
    }
}

function saveToLocalStorage()
{
    const personasLeidas = JSON.parse(JSON.stringify(readAllRows()));
    localStorage.setItem("personas",JSON.stringify(personasLeidas));
    personas = localStorage.getItem("personas")?JSON.parse(localStorage.getItem("personas")):[];
}

// CLICK EN TBODY
window.addEventListener("click",(e)=>{
    if(e.target.matches("tr td")){
        const row = e.target.parentElement;
        const array = readRow(row);
        formPersona.id.value=array[0];
        formPersona.nombre.value=array[1];
        formPersona.edad.value=array[2];
        formPersona.email.value=array[3];
        formPersona.sexo.value=array[4];
        btnEliminar.hidden=false;
        btnCancelar.hidden=false;
    }

});

// BOTON ELIMINAR CLICK
btnEliminar.addEventListener("click",(e)=>{
    let row = searchRow(formPersona.id.value);
    row.parentElement.removeChild(row);
    saveToLocalStorage();
    actualizarTabla(personas);
});

// BOTON CANCELAR CLICK
btnCancelar.addEventListener("click",(e)=>{
    formPersona.nombre.value="";
    formPersona.edad.value="";
    formPersona.email.value="";
    formPersona.sexo.value="";
    formPersona.id.value="";
    btnEliminar.hidden=true;
    btnCancelar.hidden=true;

});


// RECREA LA TABLA CON LOS CONTENIDOS EN LISTA
function actualizarTabla(lista)
{
    document.getElementById("btnEliminar").hidden=true;
    document.getElementById("btnCancelar").hidden=true;
    const container = document.querySelector('.table-container');
    while(container.children.length>0){
        container.removeChild(container.firstElementChild);
    }
    try
    {
        container.appendChild(createSpinner());
        let generacionTabla = setTimeout(() => {

            container.appendChild(TableGenerator(lista));
        }, 1000);
        deleteSpinner(generacionTabla,container);
    }
    catch(e)
    {
        console.log("No tiene datos en LocalStorage");
    }
}
async function deleteSpinner(tableDelayed,container)
{
    await(tableDelayed);
    setTimeout(() => {
        container.removeChild(document.getElementById("divSpinner"));
    }, 100);
}

function createSpinner()
{
    const div = document.createElement("div");
    div.setAttribute("id","divSpinner");
    let spinner = document.createElement("img");
    spinner.setAttribute("src","./assets/spinner.gif");
    spinner.setAttribute("alt","Cargando tabla");
    div.appendChild(spinner);
    return div;
}

// CONVIERTE ARRAY A PERSONA
function arrayToPersona(array)
{
    return new Persona(array[0],array[1],array[2],array[3],array[4])
}

// DEVUELVE ARRAY DE LOS CONTENIDOS DE ARRAY
function readRow(row)
{
    const firstValue = row.firstElementChild;
    let value = firstValue;
    let array = new Array();
    if(row.dataset!=null && row.dataset.id!=null)
    {
        array.push(row.dataset.id);        
    }
    while(value!=null)
    {
        array.push(value.textContent);
        value = value.nextElementSibling;
    }
    return array;
}

// BUSCA UN ROW SEGUN SU ID
function searchRow(id)
{
    const tbody = document.querySelector('tbody');
    const firstRow = tbody.firstElementChild;
    let row = firstRow;
    let idSearch=-1;
    while(row != null)
    {
        idSearch = row.dataset.id;
        if(id==idSearch)
        {
            return row;
        }
        row = row.nextElementSibling;
    }
}

// CREA UN ARRAY DE TODAS LAS FILAS DE TBODY
function readAllRows()
{
    const tbody = document.querySelector('tbody');
    const firstRow = tbody.firstElementChild;
    let row = firstRow;
    let array = new Array();
    while(row != null)
    {
        array.push(arrayToPersona(readRow(row)));
        row = row.nextElementSibling;
    }
    return array;
}