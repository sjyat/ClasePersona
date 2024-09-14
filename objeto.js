

class Personas {
    //creación del objeto
    constructor (nombre, apellido, edad){
        //Atributos
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
   

//Métodos
MostroNombre() {
    return `${this.nombre}`;
}
MostroApellido() {
    return `${this.apellido}`;
}
MostroEdad() {
    return `${this.edad}`;
}

}


//creamos un objeto
let persona1= new Personas("Juan", "Pérez", 25);
let persona2= new Personas("Billy", "Bin", 26);
let persona3= new Personas("Oskar", "Coy",30);

//impresión de los atributos del objeto persona 1
console.log(persona1);
console.log(persona2);
console.log(persona3);

