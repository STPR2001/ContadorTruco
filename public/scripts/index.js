import {Contador} from "./contador.js"


//window.alert("No vale llorar");


const p1 = new Contador("Nosotros", document.getElementById("jugador1Container"));
const p2 = new Contador("Ellos", document.getElementById("jugador2Container"));

document.getElementById("reset").addEventListener("click",()=>{
    p1.reset();
    p2.reset();
})

p1.agregar();
p1.reset();
p1.agregar();
p1.restar();
p1.restar();
p2.agregar();
p2.restar();