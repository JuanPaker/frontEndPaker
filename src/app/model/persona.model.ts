export class persona {

    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    email: String;
    contraseña: String;
  
    constructor(nombre: String, apellido: String, img: String, email: String, contraseña: String) {
  
      this.nombre = nombre;
      this.apellido = apellido;
      this.img = img;
      this.email = email;
      this.contraseña = contraseña;
  
     }
  }
