// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

class Persona {
  //Atributos
  private nombre: string;
  private apellido: string;
  private edad: number;
  private añoNac: number;

  constructor(nombre: string, apellido: string, edad: number, añoNac: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.añoNac = añoNac;
  }

  public toString(): string {
    return this.nombre + this.apellido;
  }

  public identificarEdad(año: number): number {
    return año - this.añoNac;
  }

  get Nombre(): string {
    return this.nombre;
  }

  set Nombre(nombre: string) {
    this.nombre = nombre;
  }

  get Apellido(): string {
    return this.apellido;
  }

  set Apellido(apellido: string) {
    this.apellido = apellido;
  }

  get Edad(): number {
    return this.edad;
  }

  set Edad(edad: number) {
    this.edad = edad;
  }

  get AñoNac(): number {
    return this.añoNac;
  }

  set AñoNac(añoNac: number) {
    this.añoNac = añoNac;
  }

  CalcularAñoNacimiento(año: number): number {
    return año - this.edad;
  }
}
