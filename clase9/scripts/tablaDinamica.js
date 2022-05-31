const crearCabecera=(elemento)=>{
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    tr.setAttribute('class','cabecera');
    thead.appendChild(tr);
    console.log(elemento);
    if(elemento){
            Object.keys(elemento).forEach((key)=>{
            if(key!=='id'){
                const th = document.createElement("th");
                th.appendChild(document.createTextNode(key));
                tr.appendChild(th);
            }
            console.log(key);
        });
    }
    return thead;
}


const crearCuerpo = (vec)=>{
    const tbody = document.createElement('tbody');
    vec.forEach((elemento,index)=>{
        const tr = document.createElement('tr');

      

        tr.classList.add(index%2?'colorImpar':'colorPar','pointer')
        for(const key in elemento){
            if(key === 'id'){
                tr.setAttribute('data-id',elemento[key]);
            } else{
                const td = document.createElement("td");
                td.appendChild(document.createTextNode(elemento[key]));
                tr.appendChild(td);
            }
        }
        tbody.appendChild(tr);
    })
    return tbody;    
}

const crearTabla = (datos)=>{
    const tabla = document.createElement("table");
    tabla.appendChild(crearCabecera(datos[0]));
    tabla.appendChild(crearCuerpo(datos));
    return tabla;
    /*
    const tfoot = document.createElement("tfoot");
    const trfooter = document.createElement("tr");
    const tdfooter = document.createElement("td");*/
}

export default crearTabla;