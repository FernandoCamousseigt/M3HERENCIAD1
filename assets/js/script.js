let formulario = document.querySelector('form');

let agregar = (event) => {
    event.preventDefault();

    let nombre = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.getElementById('resultado');

    if (tipo == 'Perro') {
        let puppy = new Mascota(nombre, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<ul><li>${puppy.datosPropietario()}</li><li> ${puppy.datosMascota()}</li></ul>`;
    } else if (tipo == 'Gato') {
        let kitty = new Mascota(nombre, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<ul><li>${kitty.datosPropietario()}</li><li> ${kitty.datosMascota()}</li></ul>`;
    } else { 
        let bunny = new Mascota(nombre, telefono, direccion, nombreMascota, tipo, enfermedad);
        resultado.innerHTML = `<ul><li>${bunny.datosPropietario()}</li><li> ${bunny.datosMascota()}</li></ul>`;
    }
}

formulario.addEventListener('submit', agregar);




class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nuevo_nombre){
        this._nombre = nuevo_nombre;
    }

    get direccion(){
        return this._direccion;
    }
    set direccion(nueva_direccion){
        this._direccion = nueva_direccion;
    }
    get telefono(){
        return this._telefono;
    }
    set telefono(nuevo_telefono){
        this._telefono = nuevo_telefono;
    }
    datosPropietario() {
        return (`El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.telefono}, y el número telefónico de contacto: ${this.direccion}`);
    }
}

class Animal extends Propietario {
    constructor(nombre, telefono, direccion, tipo) {
        super(nombre, telefono, direccion);
        this._tipo = tipo;
    }

    get tipo() {
        return this._tipo;
    }
    set tipo(nuevo_tipo){
        this._tipo = nuevo_tipo;
    }

}

class Mascota extends Animal {
    constructor(nombre, telefono, direccion, nombreMascota, tipo, enfermedad) {
        super(nombre, telefono, direccion, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nuevo_nombreMascota) {
        this._nombreMascota = nuevo_nombreMascota;
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(nuevo_enfermedad) {
        this._enfermedad = nuevo_enfermedad;
    }
    datosMascota() {
        return (`El tipo de animal es un: ${this.tipo} , mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`);
    }
}