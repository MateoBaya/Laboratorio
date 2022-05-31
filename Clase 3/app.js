console.log(document.getElementById("btn"));

document.forms[0].addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submit")
})


window.addEventListener("click",(e)=> {
    if(e.target.matches("#btn"))
    {
        console.log("buenas");
    }
    else if(e.target.matches("#leBoton"))
    {
        alert("Soy le boton molesto");
    }
})