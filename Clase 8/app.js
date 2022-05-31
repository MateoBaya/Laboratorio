import { OrderedListGenerator } from "./orderedListGenerator.js";
const orderedList = document.getElementById("listEjercicio");
orderedList.appendChild(OrderedListGenerator(["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]));
