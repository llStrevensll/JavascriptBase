class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const cliente = new Cliente('Angel', 1000);
console.log(cliente.imprimirSaldo());


class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) { //constructor de la clase Empresa

        super(nombre, saldo); //Constructor Padre

        this.telefono = telefono;
        this.tipo = tipo;

    }

    static bienvenida() {
        return `Bienvanida al cajero para Empresas`
    }
}

const empresa = new Empresa('Empresa1', 10000, 312456783, 'Construccion');
console.log(empresa.imprimirSaldo()); //puede usar metodos heredados

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());