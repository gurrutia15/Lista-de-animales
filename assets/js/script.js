  class Propietario {
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono
    }
    datosPropietario(){
        return `El nombre del dueño es ${this.nombre}. El domicilio es: ${this.direccion} y el número telefónico de contacto: ${this.telefono}`}
    }
    
    // const p1 = new Propietario('Juan', 'Chile', '22345673')
//     const p2 = new Propietario('María', 'Valparaíso', '334762837')
// console.log(p1)
// console.log(p2)
// console.log(p1.datosPropietario())
// console.log(p2.datosPropietario())

class Animal1 extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this._tipo = tipo
    }
    get tipo(){
        return this._tipo
    }
}
// const a1 = new Animal('Juan', 'Chile', '22345673', 'perro')
// console.log(a1)
// console.log(a1.nombre)
// console.log(a1.direccion)
// console.log(a1.telefono)
// console.log(a1.tipo)

class Mascota extends Animal1{
    constructor(nombre, direccion, telefono, tipo, nombreMascota , enfermedad){
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad
    }
    get nombreMascota(){
        return this._nombreMascota
    }
    set nombreMascota(nuevo_nombreMascota){
        this._nombreMascota = nuevo_nombreMascota
    }
    get enfermedad(){
        return this._enfermedad
    }
    set enfermedad(nueva_enfermedad){
        this._enfermedad= nueva_enfermedad
    }
    datosMascota(){
        return `El tipo de animal es un: ${this.tipo}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`
    }
}
// const m1 = new Mascota('Juan', 'Chile', '22345673', 'perro','mona','distemper')
// console.log(m1)
// console.log(m1.nombre)
// console.log(m1.direccion)
// console.log(m1.telefono)
// console.log(m1.tipo)
// console.log(m1.nombreMascota)
// console.log(m1.enfermedad)
// console.log(m1.datosMascota())


// let propietario = document.querySelector('#propietario').value
// let telefono = document.querySelector('#telefono').value
// let direccion = document.querySelector('#direccion').value
// let nombreMascota = document.querySelector('#nombreMascota').value
// let tipo = document.querySelector('#tipo').value
// let enfermedad = document.querySelector('#enfermedad').value
// let resultado = document.querySelector('#resultado').value
let boton = document.querySelector('.btn')
boton.addEventListener('click', observando);

function registrando(){
    let nombre = document.getElementById('propietario').value
    let telefono = document.getElementById('telefono').value
    let direccion = document.getElementById('direccion').value
    let nombreMascota = document.getElementById('nombreMascota').value
    let tipo = document.getElementById('tipo').value
    let enfermedad = document.getElementById('enfermedad').value
    var mascotaNueva = new Mascota(nombre, direccion, telefono, tipo, nombreMascota , enfermedad)
    return mascotaNueva
}
 function observando(event){
    const mascotaData = registrando();
    const nombre = mascotaData.nombre
    const telefono = mascotaData.telefono
    const direccion = mascotaData.direccion
    const nombreMascota = mascotaData.nombreMascota;
    const tipo = mascotaData.tipo;
    const enfermedad = mascotaData.enfermedad;
    const resultado = document.getElementById('resultado')
    const li = document.createElement('li')
    const li2 = document.createElement('li')
    li.innerHTML = `El nombre del dueño es ${nombre}. El domicilio es: ${direccion} y el número telefónico de contacto: ${telefono}.`
    li2.innerHTML = `El tipo de animal es un: ${tipo}, mientras que el nombre de la mascota es: ${nombreMascota} y la enfermedad es: ${enfermedad}`
    resultado.appendChild(li)
    resultado.appendChild(li2)
    document.getElementById('propietario').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('nombreMascota').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('enfermedad').value = '';
    event.preventDefault()
 }  
