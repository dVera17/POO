class Persona{
    nombre;
    edad;
    sexo;
    constructor(nombre, edad, sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar(){
        return `Hola ${this.nombre}`;
    }

    static esMayorDeEdad(edad){
        return parseInt(edad) >=18 ? true : false;
    }
}

let saludoHtml = document.querySelector('#saludoHtml');
let mayorMenor = document.querySelector('#mayorMenor');
let formPersona = document.querySelector('#formPersona');
formPersona.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let persona1 = new Persona(`${data.nombre}`, `${data.edad}`, `${data.sexo}`);
    saludoHtml.textContent = persona1.saludar();
    mayorMenor.textContent = Persona.esMayorDeEdad(persona1.edad);
})

class Estudiante extends Persona{
    carrera;

    constructor(nombre, edad, sexo, carrera){
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar(){
        return `Estas estudiando ${this.carrera}`
    }
}

let carreraHtml = document.querySelector('#carreraHtml');
let saludoEstudiante = document.querySelector('#saludoEstudiante');
let formEstudiante = document.querySelector('#formEstudiante');
formEstudiante.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let estudiante1 = new Estudiante(`${data.nombre}`, `${data.edad}`, `${data.sexo}`, `${data.carrera}`)
    saludoEstudiante.textContent = estudiante1.saludar()    ;
    carreraHtml.textContent = estudiante1.estudiar();
})

class Animal{
    nombre;
    edad;
    sonido;

    constructor(nombre, edad, sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }

    hacerSonido(){
        return `Sonido del animal ---> ${this.sonido}`
    }
}

let sonidoAnimal = document.querySelector('#sonidoAnimal');
let formAnimal = document.querySelector('#formAnimal');
formAnimal.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let animal1 = new Animal(`${data.nombre}`, `${data.edad}`, `${data.sonido}`)
    sonidoAnimal.textContent = animal1.hacerSonido();
})

class Perro extends Animal {
    raza;
    constructor(nombre, edad, sonido, raza){
        super(nombre, edad, sonido);
        this.raza = raza;
    }

    moverCola(){
        return `El perro está moviendo la cola.`
    }
}

let showAccion = document.querySelector('#showAccion');
let formPerro = document.querySelector('#formPerro');
formPerro.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let perro1 = new Perro(`${data.nombre}`, `${data.edad}`, `${data.sonido}`, `${data.raza}`)
    showAccion.textContent = perro1.moverCola();
})

class Figura{
    color;
    area;

    constructor(color, area){
        this.color = color;
        this.area = area;
    }

    calcularArea(){
        return `Area: ${this.area}`
    }
}

let area = document.querySelector('#area');
let formFigura = document.querySelector('#formFigura');
formFigura.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let figura1 = new Figura(`${data.color}`, `${data.area}`)
    area.textContent = figura1.calcularArea();
})

class Circulo extends Figura{
    radio;

    constructor(color, radio){
        super(color);
        this.radio = radio;
    }

    calcularArea(radio){
        return `Área del circulo: ${(parseFloat(radio) * Math.PI).toFixed(2)}`
    }
}

let areaCirculo = document.querySelector('#areaCirculo');
let formCirculo = document.querySelector('#formCirculo');
formCirculo.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let circulo1 = new Circulo(`${data.color}`, `${data.radio}`);
    areaCirculo.textContent = circulo1.calcularArea(data.radio);
})

class Rectangulo extends Figura{
    largo;
    ancho;

    constructor(color, largo, ancho){
        super(color);
        this.largo = largo;
        this.ancho = ancho;
    }

    calcularArea(){
        return `Área del rectangulo: ${(parseFloat(this.largo) * parseFloat(this.ancho)).toFixed(2)}`
    }
}

let areaRectangulo = document.querySelector('#areaRectangulo');
let formRectangulo = document.querySelector('#formRectangulo');
formRectangulo.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let rectangulo1 = new Rectangulo(`${data.color}`, `${data.largo}`, `${data.ancho}`);
    areaRectangulo.textContent = rectangulo1.calcularArea();
})

class Vehiculo{
    marca;
    modelo;
    velocidad;

    constructor(marca, modelo, velocidad){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar(){
        return this.velocidad = parseInt(this.velocidad) + 10 
    }

    static convertirKmHEnMph(velocidad){
        return (parseFloat(velocidad)/1.60934).toFixed(3);
    }
}

let velocidadActual = document.querySelector('#velocidadActual');
let formVehiculo = document.querySelector('#formVehiculo');
formVehiculo.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let vehiculo1 = new Vehiculo(`${data.marca}`, `${data.modelo}`, `${data.velocidad}`)
    velocidadActual.textContent = vehiculo1.acelerar();
})

class Coche extends Vehiculo{
    combustible;

    constructor(marca, modelo, velocidad, combustible){
        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }

    acelerar(){
        return this.velocidad = parseInt(this.velocidad) + 20 
    }
}

let velocidadCoche = document.querySelector('#velocidadCoche');
let formCoche = document.querySelector('#formCoche');
formCoche.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let coche1 = new Coche(`${data.marca}`, `${data.modelo}`, `${data.velocidad}`, `${data.combustible}`);
    velocidadCoche.textContent = coche1.acelerar();
})

let velocidadKm = document.querySelector('#velocidadKm');
let formKilometros = document.querySelector('#formKilometros');
formKilometros.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    velocidadKm.textContent = Vehiculo.convertirKmHEnMph(data.velocidad);
})

class Empleado{
    nombre;
    edad;
    sueldo;
    static id = 0;

    constructor(nombre, edad, sueldo){
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
    }

    calcularSalarioAnual(){
        return parseInt(this.sueldo)*12;
    }

    static generarIdEmpleado(){
        Empleado.id = parseInt(Empleado.id) + 1
        return `ID EMPLEADO --> ${Empleado.id}`;
    }
    
}

let salarioAnual = document.querySelector('#salarioAnual');
let formEmpleado = document.querySelector('#formEmpleado');
formEmpleado.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let empleado1 = new Empleado(`${data.nombre}`, `${data.edad}`, `${data.sueldo}`)
    salarioAnual.textContent = empleado1.calcularSalarioAnual();
})

class Gerente extends Empleado{
    departamento;
    
    constructor(nombre, edad, sueldo, departamento){
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }

}

let salarioGerente = document.querySelector('#salarioGerente');
let formGerente = document.querySelector('#formGerente');
formGerente.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    let gerente1 = new Empleado(`${data.nombre}`, `${data.edad}`, `${data.sueldo}`, `${data.departamento}`);
    salarioGerente.textContent = gerente1.calcularSalarioAnual();
})

let showId = document.querySelector('#showId');
let btnId = document.querySelector('#btnId');
btnId.addEventListener('click', (e) => {
    showId.textContent = Empleado.generarIdEmpleado();
})

