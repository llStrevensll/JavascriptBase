//Object Literal

const cliente = {
    nombre: 'Angel',
    saldo: 1100,
    tipoCliente: function() {
        let tipo;

        if (this.saldo > 1000) { //Es necesario usar this
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal'
        }

        return tipo;
    }
}

//console.log(cliente.tipoCliente());

//Metodo Alternativo - Object

function clienteOtro(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = 1200;
    this.tipoCliente = function(edad) {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum'
        } else {
            tipo = 'Normal'
        }
        return tipo;

    }
}

const persona = new clienteOtro('Angel', 2300);
const persona2 = new clienteOtro('Emanuel', 600);

console.log('persona:', persona);

//Objetos 
//Se pueden utilizar objetos con los tipos primitivos

const nombre1 = 'Angel'; //String
const nombre2 = new String('Angel'); //Objeto tipo String

const numero1 = 20; //Numero
const numero2 = new Number(20); //Objeto tipo numero

const boolean1 = true;
const boolean2 = new Boolean(true);

//Funciones
const funcion1 = function(a, b) {
    return a + b;
}
const funcion2 = new Function('a', 'b', 'return 1 +2');

//Objetos
const persona10 = {
    nombre: 'Juan'
}
const persona20 = new Object({ nombre: 'Juan' });

//Arreglo
const arreglo1 = [1, 2, 3, 4];
const arreglo2 = new Array(1, 2, 3, 4);

console.log(arreglo1);
console.log(arreglo2);