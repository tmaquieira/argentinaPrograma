const deportista = '{"nombre":"Messi","champions":4}';
console.log(JSON.stringify(deportista));

//aclaración: esto son sólo apuntes a modo de ejemplo, ya que no tengo la URL del navegador para castear pasajeros.json

fetch('/pasajeros.json').then((response) => response.json()).then((data)=> console.log(data));

fetch('/pasajeros.json').then((response) => response.json()).then((pasajeros)=> {
	const nombreDePasajeros = pasajeros.map((pasajero)=>pasajero.nombre)
	console.log(nombreDePasajeros);
}); 

//https://www.youtube.com/watch?v=nIctNyBGQcE&ab_channel=EDteam 