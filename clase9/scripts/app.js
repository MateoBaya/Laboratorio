//import {empleados} from '../data/datos.js';
import crearTabla from '../scripts/tablaDinamica.js';
import Empleado from '../scripts/empleado.js';

const empleados = localStorage.getItem("empleados")?JSON.parse(localStorage.getItem("empleados")):[];
actualizarTabla(empleados);
console.log(empleados);

const $formEmpleado = document.forms[0];

$formEmpleado.addEventListener("submit",(e)=>{
    const frm = e.target;       
    e.preventDefault(); //Aborto el envío de la data
    //Alta y modificación
    console.log(frm.nombre.value);
    const nuevoEmpleado = new Empleado(Date.now(),frm.nombre.value,frm.edad.value,frm.email.value,frm.sexo.value);
    console.log(nuevoEmpleado);
    empleados.push(nuevoEmpleado);
    localStorage.setItem("empleados",JSON.stringify(empleados));
    actualizarTabla(empleados);

});

function actualizarTabla(lista){
    const container = document.querySelector('.tabla-container');
    while(container.children.length>0){
        container.removeChild(container.firstElementChild);
    }
    container.appendChild(crearTabla(lista));
}

window.addEventListener("click",(e)=>{
    if(e.target.matches("tr td")){
        console.log(e.target.parentElement.dataset.id);
    }

});
//document.querySelector('.tabla-container').appendChild(crearTabla(empleados));
