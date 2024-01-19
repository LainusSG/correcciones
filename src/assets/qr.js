
//-------------------------------------------------- Imprimir Div --------------------------------------------------
function imprimirElemento(elemento) {
  var ventana = window.open('()','PRINT', 'height=400,width=600');
  ventana.document.write('<link rel="stylesheet" href="../assets/impresion.css">'); //Aquí agregué la hoja de estilos
  ventana.document.write('<body>');
  ventana.document.write(elemento.innerHTML);
  ventana.document.write('</body>');
  ventana.document.close();
  ventana.focus();
  ventana.onload = function() {
    ventana.print();
    ventana.close();
  };
  return true;
}

document.querySelector("#btnImprimirDiv").addEventListener("click", function() {
  var div = document.querySelector("#imprimible");
  imprimirElemento(div);
});


//-------------------------------------------------- borar datos del div --------------------------------------------------

function aliminarHijos() {
  var padre = document.getElementById("padre");
  for (var i = 0; i < padre.children.length; i++) {
    var hijo = padre.children[i]
    padre.remove(hijo)
  }
}


//-------------------------------------------------- ocultar y mostrar datos --------------------------------------------------

var clic = 1;

function divLogin(){ 

   if(clic==1){
    document.getElementById("caja").style.display = "block";
   

   clic = clic + 1;

   } else{
   
    document.getElementById('caja').style.display = 'none';

    clic = 1;

   }   

}

function previewImage(event, querySelector){

	//Recuperamos el input que desencadeno la acción
	const input = event.target;
	
	//Recuperamos la etiqueta img donde cargaremos la imagen
	$imgPreview = document.querySelector(querySelector);

	// Verificamos si existe una imagen seleccionada
	if(!input.files.length) return
	
	//Recuperamos el archivo subido
	file = input.files[0];

	//Creamos la url
	objectURL = URL.createObjectURL(file);
	
	//Modificamos el atributo src de la etiqueta img
	$imgPreview.src = objectURL;
                
}