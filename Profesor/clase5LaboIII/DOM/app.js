console.log(document.head);
console.log(document.body);
console.log(document.images[1]);
console.log(document.links);
console.log(document.forms);
console.log(document.scripts);
console.log(document.styleSheets);
console.log(document.documentElement);
console.log(document.characterSet);
console.log(document.documentElement.lang);

// selectores

console.log(document.getElementById("frutas"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByName("nombre"));

console.log(document.querySelector("#frutas"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll("nav>a"));

// atributos
const $linkGoogle = document.querySelector("a");

console.log($linkGoogle);

$linkGoogle.setAttribute("href", "https://google.com.ar");
//$linkGoogle.setAttribute("target", "_blank");
$linkGoogle.target = "_blank";
console.log($linkGoogle.hasAttribute("rel"));
$linkGoogle.setAttribute("rel", "noopener noreferrer nofollow");

if ($linkGoogle.hasAttribute("rel")) {
  $linkGoogle.removeAttribute("rel");
}

const $titulo = document.querySelector("h1");

console.log($titulo.dataset.description);
console.log($titulo.getAttribute("data-description"));

//$titulo.dataset.id = 20;
$titulo.setAttribute("data-id", 30);

$miDiv = document.getElementById("miDiv");
$miParrafo = document.getElementById("p1");

$miParrafo.textContent = "Esto es un parrafo";

$miDiv.innerHTML = "<p>Esto es un parrafo como texto</p>";

$miDiv.textContent = `Esto es un template 
string`;

const $cards = document.querySelector(".cards");

console.log($cards);

console.log($cards.children);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);

console.log($cards.children[1]);

const $strong = document.querySelector("strong");

console.log($strong.closest("div"));

const $figure = document.createElement("figure");
const $img = document.createElement("img");
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.alt = "imagen de animal";

const $figcaption = document.createElement("figcaption");
const $texto = document.createTextNode("Animal");
$figcaption.appendChild($texto);

$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure);

$figure.classList.add("card");

console.log($figure.classList.contains("card"));

//$figure.classList.remove("card");

$figure.classList.replace("card", "rojo");
$figure.classList.add("pepe");

$figure.classList.add("blanco", "negro", "rotar");

const $parrafo1 = document.getElementById("parrafo1");

//$parrafo1.style.backgroundColor = "blue";
$parrafo1.setAttribute("style", "background-color:yellow; color: red" );

const dias = ["lunes"];


