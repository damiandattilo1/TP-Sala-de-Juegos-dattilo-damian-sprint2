export class Usuario{
    correo :string;
    nombre:string;
    apellido:String;
    dni:String;

    constructor(correo:string, nombre:string, apellido:String, dni:string)
    {
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
}