//Object create

const Cliente = {
    imprimirSaldo: function() {
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}

const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 1000;

mary.retirarSaldo(300);
console.log(mary.imprimirSaldo());