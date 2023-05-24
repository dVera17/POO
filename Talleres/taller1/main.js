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
        return `Sonido del animal ${this.sonido}`
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

class Figura{
    color;
    area;

    constructor(color, area){
        this.color = color;
        this.area = area;
    }

    calcularArea(){
        return `Area`
    }
}

class Circulo extends Figura{
     
}
