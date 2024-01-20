
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
    document.getElementById('caja').style.display = 'none';

   clic = clic + 1;
   } else{
    document.getElementById("caja").style.display = "block";
    clic = 1;
   }   
}


var clic2 = 1;
function divLogin2(){ 
    document.getElementById("aparecer").style.display = "block";
    clic2 = 1;
}

var clic3 = 1;
function divLogin3(){ 
    document.getElementById("aparecer2").style.display = "block";
    clic3 = 1;
}

//------------------------------------------------------------------------------LAVADORA 1

var valorS = 1;
function BotonSig(){ 
    document.getElementById("boton1").style.display = "block";
    document.getElementById("boton0").style.display = "none";
    valorS = 1;
}


var valorS2 = 1;
function BotonSig2(){ 
    document.getElementById("boton0").style.display = "block";
    document.getElementById("boton1").style.display = "none";
    valorS2 = 1;
}


//------------------------------------------------------------------------------LAVADORA 2

var valorS3 = 1;
function BotonSig3(){ 
    document.getElementById("boton11").style.display = "block";
    document.getElementById("boton00").style.display = "none";
    valorS3 = 1;
}


var valorS4 = 1;
function BotonSig4(){ 
    document.getElementById("boton00").style.display = "block";
    document.getElementById("boton11").style.display = "none";
    valorS4 = 1;
}


//------------------------------------------------------------------------------LAVADORA 1


var valorS5 = 1;
function BotonSig5(){ 
    document.getElementById("boton111").style.display = "block";
    document.getElementById("boton000").style.display = "none";
    valorS5 = 1;
}


var valorS6 = 1;
function BotonSig6(){ 
    document.getElementById("boton000").style.display = "block";
    document.getElementById("boton111").style.display = "none";
    valorS6 = 1;
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






/////////-----------pre lavado  

//-------------------------------------------------------------------------- 1 

var prelavadon1= 1;
function prelavado1_1(){ 
    document.getElementById("prelavadon1").style.display = "block";
    document.getElementById("prelavadoff1").style.display = "none";
    prelavadon1 = 1;
}


var prelavadoff1 = 1;
function prelavado1_2(){ 
    document.getElementById("prelavadoff1").style.display = "block";
    document.getElementById("prelavadon1").style.display = "none";
    prelavadoff1 = 1;
}


//-------------------------------------------------------------------------- 2 

var prelavadon2= 1;
function prelavado2_1(){ 
    document.getElementById("prelavadon2").style.display = "block";
    document.getElementById("prelavadoff2").style.display = "none";
    prelavadon2 = 1;
}


var prelavadoff2 = 1;
function prelavado2_2(){ 
    document.getElementById("prelavadoff2").style.display = "block";
    document.getElementById("prelavadon2").style.display = "none";
    prelavadoff2 = 1;
}



//-------------------------------------------------------------------------- 3

var prelavadon3= 1;
function prelavado3_1(){ 
    document.getElementById("prelavadon3").style.display = "block";
    document.getElementById("prelavadoff3").style.display = "none";
    prelavadon3 = 1;
}


var prelavadoff3 = 1;
function prelavado3_2(){ 
    document.getElementById("prelavadoff3").style.display = "block";
    document.getElementById("prelavadon3").style.display = "none";
    prelavadoff3 = 1;
}

//-------------------------------------------------------------------------- 4

var prelavadon4= 1;
function prelavado4_1(){ 
    document.getElementById("prelavadon4").style.display = "block";
    document.getElementById("prelavadoff4").style.display = "none";
    prelavadon4 = 1;
}


var prelavadoff4 = 1;
function prelavado4_2(){ 
    document.getElementById("prelavadoff4").style.display = "block";
    document.getElementById("prelavadon4").style.display = "none";
    prelavadoff4 = 1;
}


//-------------------------------------------------------------------------- 5

var prelavadon5= 1;
function prelavado5_1(){ 
    document.getElementById("prelavadon5").style.display = "block";
    document.getElementById("prelavadoff5").style.display = "none";
    prelavadon5 = 1;
}


var prelavadoff5 = 1;
function prelavado5_2(){ 
    document.getElementById("prelavadoff5").style.display = "block";
    document.getElementById("prelavadon5").style.display = "none";
    prelavadoff5 = 1;
}



//-------------------------------------------------------------------------- 6

var prelavadon6= 1;
function prelavado6_1(){ 
    document.getElementById("prelavadon6").style.display = "block";
    document.getElementById("prelavadoff6").style.display = "none";
    prelavadon6 = 1;
}


var prelavadoff6 = 1;
function prelavado6_2(){ 
    document.getElementById("prelavadoff6").style.display = "block";
    document.getElementById("prelavadon6").style.display = "none";
    prelavadoff6 = 1;
}



//-------------------------------------------------------------------------- 7

var prelavadon7= 1;
function prelavado7_1(){ 
    document.getElementById("prelavadon7").style.display = "block";
    document.getElementById("prelavadoff7").style.display = "none";
    prelavadon7 = 1;
}


var prelavadoff7 = 1;
function prelavado7_2(){ 
    document.getElementById("prelavadoff7").style.display = "block";
    document.getElementById("prelavadon7").style.display = "none";
    prelavadoff7 = 1;
}


//-------------------------------------------------------------------------- 8 

var prelavadon8= 1;
function prelavado8_1(){ 
    document.getElementById("prelavadon8").style.display = "block";
    document.getElementById("prelavadoff8").style.display = "none";
    prelavadon8 = 1;
}


var prelavadoff8 = 1;
function prelavado8_2(){ 
    document.getElementById("prelavadoff8").style.display = "block";
    document.getElementById("prelavadon8").style.display = "none";
    prelavadoff8 = 1;
}



//-------------------------------------------------------------------------- 9

var prelavadon9= 1;
function prelavado9_1(){ 
    document.getElementById("prelavadon9").style.display = "block";
    document.getElementById("prelavadoff9").style.display = "none";
    prelavadon9 = 1;
}


var prelavadoff9 = 1;
function prelavado9_2(){ 
    document.getElementById("prelavadoff9").style.display = "block";
    document.getElementById("prelavadon9").style.display = "none";
    prelavadoff9 = 1;
}

//-------------------------------------------------------------------------- 10

var prelavadon10= 1;
function prelavado10_1(){ 
    document.getElementById("prelavadon10").style.display = "block";
    document.getElementById("prelavadoff10").style.display = "none";
    prelavadon10 = 1;
}


var prelavadoff10= 1;
function prelavado10_2(){ 
    document.getElementById("prelavadoff10").style.display = "block";
    document.getElementById("prelavadon10").style.display = "none";
    prelavadoff10 = 1;
}


//-------------------------------------------------------------------------- 11

var prelavadon11= 1;
function prelavado11_1(){ 
    document.getElementById("prelavadon11").style.display = "block";
    document.getElementById("prelavadoff11").style.display = "none";
    prelavadon11 = 1;
}


var prelavadoff11 = 1;
function prelavado11_2(){ 
    document.getElementById("prelavadoff11").style.display = "block";
    document.getElementById("prelavadon11").style.display = "none";
    prelavadoff11 = 1;
}

