export default class Corredores {
    constructor(color, posicion, turno) {
        this._color = color;
        this._posicion = posicion;
        this._turno = turno;
    }

    avanzar(pasos) {
        pasos.lanzar();

        this._posicion += pasos;
    }
}