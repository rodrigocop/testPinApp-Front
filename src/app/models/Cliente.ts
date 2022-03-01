export class Cliente {
    id?: string;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    edad: number;

    constructor(nombre: string, apellido: string, fechaNacimiento: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
    }
}