function textoDia(a){
	const fechaA = new Date();
	let num = fechaA.getDay();
	let dia = "No coincide con la fecha actual";
	if(a==num){
		switch(a){
			case 0 : dia = "Domingo";
				break;
			case 1 : dia = "Lunes";
				break;
			case 2 : dia = "Martes";
				break;
			case 3 : dia = "Miercoles";
				break;
			case 4 : dia = "Jueves";
				break;
			case 5 : dia = "Viernes";
				break;
			case 6 : dia = "Sábado";
		}
	}
	return dia;
}
