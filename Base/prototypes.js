function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
//Prototypes -> Solo el objeto Cliente tendra acceso al los metodos definidos en su prototype
//Prototype para saber el tipo de cliente (gold, platinum, normal)
Cliente.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

//Prototype imprimir saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo},
    Tipo Cliente ${this.tipoCliente()}`;
}

//Prototype Retirar saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente('Angel', 100);
const cliente2 = new Cliente('Emanuel', 600);
const cliente3 = new Cliente('Steven', 1200);

cliente2.retirarSaldo(300); //El cliente2 retira 300 de su saldo 

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());