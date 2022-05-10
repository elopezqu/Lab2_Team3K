function generarTabla(){
	var numFilas = document.getElementById("numFilas").value;
	var numColumnas = document.getElementById("numColumnas").value;
	var contenedorTabla = document.getElementById("contenedorTabla");

	contenedorTabla.innnerHTML = "";
	var tabla = "<table>";
	
	for(var i = 1; i <= numFilas; i++){
		tabla += "<tr>";
		for(var j = 1; j <= numColumnas; j++){
			valor = Math.floor(Math.random() * 100);
			tabla += "<td>"+"V"+"</br></td>";
			
		}
		tabla += "</tr>";
	}
	tabla += "</table></br>";
	
	contenedorTabla.innerHTML = tabla;
	
}
