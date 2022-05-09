function quitarGuion(){
	let link = document.getElementById("link").value;
	while(link.indexOf("-")!=-1){
		link = link.replace("-","");
	}
	console.log(link);
}
