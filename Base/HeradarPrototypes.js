/**Cliente */
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Prototype imprimir saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}`;
}

//Prototype Retirar saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente('Angel', 100); //Objeto de tipo Cliente
console.log(cliente1);



/*Banca para empresas*/
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo); //Utilizar atributos de Cliente
    this.telefono = telefono;
    this.tipo = tipo;
}
Empresa.prototype = Object.create(Cliente.prototype); //Heredar prototypes del Cliente
const empresa = new Empresa('Udemy', 1000000, 312091463, 'Educacion');

console.log(empresa.nombreClienteSaldo());