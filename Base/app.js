//document.getElementById('app').innerHTML = "Hola Mundo";
/*
let nombre = prompt('Cual es tu nombre'); //Genera ventana 
let edad = prompt('Cual es tu edad');

document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;
*/




//Crear Objeto

const persona = {
    nombre: 'Angel',
    apellido: 'Rodriguez',
    profesion: 'Systems Engineer',
    email: 'correo@hotmail.com',
    edad: 21,
    musica: ['Music1', 'Music2', 'Music3'],
    hogar: {
        ciudad: 'Bogota',
        pais: 'Colombia'
    },
    nacimiento: function() {
        return new Date().getFullYear() - this.edad;
    }
}


console.log(persona.nacimiento());

//Arreglo de objetos
const autos = [ //const no permite declarar nuevamente la variable, pero si se pueden modificar sus valores
    { modelo: 'Mustang', motor: 6.2 },
    { modelo: 'Camaro', motor: 6.1 },
    { modelo: 'Challenger', motor: 6.3 }
];
for (let i = 1; i < autos.length; i++) {
    console.log(autos[i]);
    console.log(`${autos[i].modelo} motor: ${autos[i].motor}`);

}
//permitido
autos[0].modelo = 'Audi';

//const -> no puede declarar de nuevo
/*
autos = {
    modelo: 'Auto',
    motor: 2.3
}*/


//Recorrer un arreglo con forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender Javascript'];

pendientes.forEach(function(pendiente, index) {
    console.log(` ${index} : ${pendiente}`);

});

//Map para recorrer un arreglo de objetos

const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Guitarra' },
    { id: 4, producto: 'Disco' }
];

const nombreProducto = carrito.map(function(carrito) {
    return carrito.producto;
});

console.log(nombreProducto);

//Recorrer objeto
const automovil = {
    modelo: 'Camaro',
    motor: '6.1',
    anio: '1969',
    marca: 'Chevrolet'
}

for (let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}