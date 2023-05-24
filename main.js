let lapiz1 = new Lapiz({tamaño: '8cm'}); //Creamos una instancia de la clase Lapiz
console.log(lapiz1);

/**
 * Lapiz es la clase padre 
 */
class Lapiz{
    color 
    tamaño
    #material 
    #mina
    /**
     * Cuando le colocamos #numeral antes de una propiedad quiere decir que esta es privada
     * @param {hace referencia al color de el lapiz} color  
     * @param {hace referencia al tamaño de el lapiz} tamaño 
     * @param {hace referencia al material de el lapiz} material 
     * @param {hace referencia al mina de el lapiz} mina 
     */
    constructor({color="verde",tamaño="8cm",material="madera",mina="carbon"}){//Un constructor con parametros opcionales
        this.color = color;
        this.tamaño = tamaño;
        this.#material = material;
        this.#mina = mina;
        /**
         * La palabra clave this, hace referencia al objeto en el que nos encontramos actualmente.
         * Esta palabra clave es utilizada dentro de una clase para hablar sobre si misma y lo que
         * le pertenece.
         */
    }

    //Get y set --> Son modificadores de acceso. Con get obtenemos y con set modificamos el valor

    get getMina(){
        return this.#mina;
    }

    get getMaterial(){
        return this.#material;
    }

    static afilar(p1){
        return `Afilando el lapiz - ${p1}`;
    }

    /**
     * La palabra reservada static hace referencia a algo que pertenece a la clase pero no a los objetos de ella
     */
}

class Boligrafo extends Lapiz{

    constructor({mina="Aluminio"}){
        super({mina});
    }

    static afilar(p1){
        return `Es un boligrafo de ${p1} por lo tanto no se puede afilar`
    }
}


/**
 * Un objeto es una instancia de una clase
 * creamos objetos con la palabra reservada NEW y el nombre de la clase
 */
let boligrafo=new Boligrafo();
console.log(boligrafo);
console.log(Boligrafo.afilar(boligrafo.getMina));
