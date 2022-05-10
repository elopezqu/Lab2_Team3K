function generarTabla(){
	var numFilas = document.getElementById("numFilas").value;
	var numColumnas = document.getElementById("numColumnas").value;
	var contenedorTabla = document.getElementById("contenedorTabla");

	contenedorTabla.innnerHTML = "";
	var tabla = "<table>";
	var valor = 0;
	var suma = 0;

	for(var i = 1; i <= numFilas; i++){
		tabla += "<tr>";
		for(var j = 1; j <= numColumnas; j++){
			valor = Math.floor(Math.random() * 100);
			tabla += "<td>"+valor+"</br></td>";
			suma+=valor;
		}
		tabla += "</tr>";
	}
	tabla += "</table></br>Resultado es: ";
	tabla+=suma;
	contenedorTabla.innerHTML = tabla;
	
}
