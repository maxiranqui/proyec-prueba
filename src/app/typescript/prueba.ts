

var numero;
let numero1;
let num: Number = 10;
let texto: string = "Hola angular";
let verdadero: boolean = true;

//objeto
let persona : IPersona = {
    nombre: "Maxi",
    apellido: "Ranqui",
    edad: 30
};


// Interface

interface IPersona{
    nombre: string;
    apellido: string;
    edad: Number;
    fechaNacimiento?: Date ;// esta propiedad es opcional
};

console.log('Texto: ', texto);
console.log('Verdadero: ', verdadero);
console.log('Numero: ', num);

console.log("Persona Nombre:",persona.nombre);