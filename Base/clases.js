class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

    tipoCliente() {
        let tipo;
        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return `Tipo Cliente: ${tipo}`;
    }

    retirarSaldo(retiro) {
        return `Saldo retirado = ${retiro},
        Saldo Actual: ${this.saldo -= retiro}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

const maria = new Cliente('Maria', 'Perez', 10000);

console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());
console.log(maria.retirarSaldo(500));

console.log(Cliente.bienvenida); //El metodo estatico no require instanciarse