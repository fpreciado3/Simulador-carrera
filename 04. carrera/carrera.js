import Dado from "./generador.js";
import Corredores from "./corredores.js";

let d = new Dado;
let c1 = new Corredores("azul", 0);
let c2 = new Corredores("rojo", 0);

for(let i = 0; i <= 100; i++) {
    c1.avanzar(d);
    c1.this._posicion++;
}