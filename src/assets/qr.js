
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
    document.getElementById("aparecer1_1").style.display = "block";
    prelavadon1 = 1;
}


var prelavadoff1 = 1;
function prelavado1_2(){ 
    document.getElementById("prelavadoff1").style.display = "block";
    document.getElementById("prelavadon1").style.display = "none";
    document.getElementById("aparecer1_1").style.display = "none";
    prelavadoff1 = 1;
}


//-------------------------------------------------------------------------- 2 

var prelavadon2= 1;
function prelavado2_1(){ 
    document.getElementById("prelavadon2").style.display = "block";
    document.getElementById("prelavadoff2").style.display = "none";
    document.getElementById("aparecer1_2").style.display = "block";
    prelavadon2 = 1;
}


var prelavadoff2 = 1;
function prelavado2_2(){ 
    document.getElementById("prelavadoff2").style.display = "block";
    document.getElementById("prelavadon2").style.display = "none";
    document.getElementById("aparecer1_2").style.display = "none";
    prelavadoff2 = 1;
}



//-------------------------------------------------------------------------- 3

var prelavadon3= 1;
function prelavado3_1(){ 
    document.getElementById("prelavadon3").style.display = "block";
    document.getElementById("prelavadoff3").style.display = "none";
    document.getElementById("aparecer1_3").style.display = "block";
    prelavadon3 = 1;
}


var prelavadoff3 = 1;
function prelavado3_2(){ 
    document.getElementById("prelavadoff3").style.display = "block";
    document.getElementById("prelavadon3").style.display = "none";
    document.getElementById("aparecer1_3").style.display = "none";
    prelavadoff3 = 1;
}

//-------------------------------------------------------------------------- 4

var prelavadon4= 1;
function prelavado4_1(){ 
    document.getElementById("prelavadon4").style.display = "block";
    document.getElementById("prelavadoff4").style.display = "none";
    document.getElementById("aparecer1_4").style.display = "block";
    prelavadon4 = 1;
}


var prelavadoff4 = 1;
function prelavado4_2(){ 
    document.getElementById("prelavadoff4").style.display = "block";
    document.getElementById("prelavadon4").style.display = "none";
    document.getElementById("aparecer1_4").style.display = "none";
    prelavadoff4 = 1;
}


//-------------------------------------------------------------------------- 5

var prelavadon5= 1;
function prelavado5_1(){ 
    document.getElementById("prelavadon5").style.display = "block";
    document.getElementById("prelavadoff5").style.display = "none";
    document.getElementById("aparecer1_5").style.display = "block";
    prelavadon5 = 1;
}


var prelavadoff5 = 1;
function prelavado5_2(){ 
    document.getElementById("prelavadoff5").style.display = "block";
    document.getElementById("prelavadon5").style.display = "none";
    document.getElementById("aparecer1_5").style.display = "none";
    prelavadoff5 = 1;
}



//-------------------------------------------------------------------------- 6

var prelavadon6= 1;
function prelavado6_1(){ 
    document.getElementById("prelavadon6").style.display = "block";
    document.getElementById("prelavadoff6").style.display = "none";
    document.getElementById("aparecer1_6").style.display = "block";
    prelavadon6 = 1;
}


var prelavadoff6 = 1;
function prelavado6_2(){ 
    document.getElementById("prelavadoff6").style.display = "block";
    document.getElementById("prelavadon6").style.display = "none";
    document.getElementById("aparecer1_6").style.display = "none";
    prelavadoff6 = 1;
}



//-------------------------------------------------------------------------- 7

var prelavadon7= 1;
function prelavado7_1(){ 
    document.getElementById("prelavadon7").style.display = "block";
    document.getElementById("prelavadoff7").style.display = "none";
    document.getElementById("aparecer1_7").style.display = "block";
    prelavadon7 = 1;
}


var prelavadoff7 = 1;
function prelavado7_2(){ 
    document.getElementById("prelavadoff7").style.display = "block";
    document.getElementById("prelavadon7").style.display = "none";
    document.getElementById("aparecer1_7").style.display = "none";
    prelavadoff7 = 1;
}


//-------------------------------------------------------------------------- 8 

var prelavadon8= 1;
function prelavado8_1(){ 
    document.getElementById("prelavadon8").style.display = "block";
    document.getElementById("prelavadoff8").style.display = "none";
    document.getElementById("aparecer1_8").style.display = "block";
    prelavadon8 = 1;
}


var prelavadoff8 = 1;
function prelavado8_2(){ 
    document.getElementById("prelavadoff8").style.display = "block";
    document.getElementById("prelavadon8").style.display = "none";
    document.getElementById("aparecer1_8").style.display = "none";
    prelavadoff8 = 1;
}



//-------------------------------------------------------------------------- 9

var prelavadon9= 1;
function prelavado9_1(){ 
    document.getElementById("prelavadon9").style.display = "block";
    document.getElementById("prelavadoff9").style.display = "none";
    document.getElementById("aparecer1_9").style.display = "block";
    prelavadon9 = 1;
}


var prelavadoff9 = 1;
function prelavado9_2(){ 
    document.getElementById("prelavadoff9").style.display = "block";
    document.getElementById("prelavadon9").style.display = "none";
    document.getElementById("aparecer1_9").style.display = "none";
    prelavadoff9 = 1;
}

//-------------------------------------------------------------------------- 10

var prelavadon10= 1;
function prelavado10_1(){ 
    document.getElementById("prelavadon10").style.display = "block";
    document.getElementById("prelavadoff10").style.display = "none";
    document.getElementById("aparecer1_10").style.display = "block";
    prelavadon10 = 1;
}


var prelavadoff10= 1;
function prelavado10_2(){ 
    document.getElementById("prelavadoff10").style.display = "block";
    document.getElementById("prelavadon10").style.display = "none";
    document.getElementById("aparecer1_10").style.display = "none";
    prelavadoff10 = 1;
}


//-------------------------------------------------------------------------- 11

var prelavadon11= 1;
function prelavado11_1(){ 
    document.getElementById("prelavadon11").style.display = "block";
    document.getElementById("prelavadoff11").style.display = "none";
    document.getElementById("aparecer1_11").style.display = "block";
    prelavadon11 = 1;
}


var prelavadoff11 = 1;
function prelavado11_2(){ 
    document.getElementById("prelavadoff11").style.display = "block";
    document.getElementById("prelavadon11").style.display = "none";
    document.getElementById("aparecer1_11").style.display = "none";
    prelavadoff11 = 1;
}


//-------------------------------------------------------------------------- 12

var prelavadon12= 1;
function prelavado12_1(){ 
    document.getElementById("prelavadon12").style.display = "block";
    document.getElementById("prelavadoff12").style.display = "none";
    document.getElementById("aparecer1_12").style.display = "block";
    prelavadon12 = 1;
}


var prelavadoff12= 1;
function prelavado10_2(){ 
    document.getElementById("prelavadoff12").style.display = "block";
    document.getElementById("prelavadon12").style.display = "none";
    document.getElementById("aparecer1_12").style.display = "none";
    prelavadoff12 = 1;
}


//-------------------------------------------------------------------------- 13

var prelavadon13= 1;
function prelavado13_1(){ 
    document.getElementById("prelavadon13").style.display = "block";
    document.getElementById("prelavadoff13").style.display = "none";
    document.getElementById("aparecer1_13").style.display = "block";
    prelavadon13 = 1;
}


var prelavadoff13 = 1;
function prelavado11_2(){ 
    document.getElementById("prelavadoff13").style.display = "block";
    document.getElementById("prelavadon13").style.display = "none";
    document.getElementById("aparecer1_13").style.display = "none";
    prelavadoff13 = 1;
}


//-------------------------------------------------------------------------- 14

var prelavadon14= 1;
function prelavado14_1(){ 
    document.getElementById("prelavadon14").style.display = "block";
    document.getElementById("prelavadoff14").style.display = "none";
    document.getElementById("aparecer1_14").style.display = "block";
    prelavadon14 = 1;
}


var prelavadoff14 = 1;
function prelavado14_2(){ 
    document.getElementById("prelavadoff14").style.display = "block";
    document.getElementById("prelavadon14").style.display = "none";
    document.getElementById("aparecer1_14").style.display = "none";
    prelavadoff14 = 1;
}

//-------------------------------------------------------------------------- 15

var prelavadon15= 1;
function prelavado15_1(){ 
    document.getElementById("prelavadon15").style.display = "block";
    document.getElementById("prelavadoff15").style.display = "none";
    document.getElementById("aparecer1_15").style.display = "block";
    prelavadon15 = 1;
}


var prelavadoff15= 1;
function prelavado15_2(){ 
    document.getElementById("prelavadoff15").style.display = "block";
    document.getElementById("prelavadon15").style.display = "none";
    document.getElementById("aparecer1_15").style.display = "none";
    prelavadoff15 = 1;
}


//-------------------------------------------------------------------------- 16

var prelavadon16= 1;
function prelavado16_1(){ 
    document.getElementById("prelavadon16").style.display = "block";
    document.getElementById("prelavadoff16").style.display = "none";
    document.getElementById("aparecer1_16").style.display = "block";
    prelavadon16 = 1;
}


var prelavadoff16 = 1;
function prelavado16_2(){ 
    document.getElementById("prelavadoff16").style.display = "block";
    document.getElementById("prelavadon16").style.display = "none";
    document.getElementById("aparecer1_16").style.display = "none";
    prelavadoff16 = 1;
}


//-------------------------------------------------------------------------- 17

var prelavadon17= 1;
function prelavado17_1(){ 
    document.getElementById("prelavadon17").style.display = "block";
    document.getElementById("prelavadoff17").style.display = "none";
    document.getElementById("aparecer1_17").style.display = "block";
    prelavadon17= 1;
}


var prelavadoff17= 1;
function prelavado17_2(){ 
    document.getElementById("prelavadoff17").style.display = "block";
    document.getElementById("prelavadon17").style.display = "none";
    document.getElementById("aparecer1_17").style.display = "none";
    prelavadoff17 = 1;
}


//-------------------------------------------------------------------------- 18

var prelavadon18= 1;
function prelavado18_1(){ 
    document.getElementById("prelavadon18").style.display = "block";
    document.getElementById("prelavadoff18").style.display = "none";
    document.getElementById("aparecer1_18").style.display = "block";
    prelavadon18 = 1;
}


var prelavadoff18 = 1;
function prelavado18_2(){ 
    document.getElementById("prelavadoff18").style.display = "block";
    document.getElementById("prelavadon18").style.display = "none";
    document.getElementById("aparecer1_18").style.display = "none";
    prelavadoff18 = 1;
}

//-------------------------------------------------------------------------- 19

var prelavadon19= 1;
function prelavado19_1(){ 
    document.getElementById("prelavadon19").style.display = "block";
    document.getElementById("prelavadoff19").style.display = "none";
    document.getElementById("aparecer1_19").style.display = "block";
    prelavadon19 = 1;
}


var prelavadoff19 = 1;
function prelavado19_2(){ 
    document.getElementById("prelavadoff19").style.display = "block";
    document.getElementById("prelavadon19").style.display = "none";
    document.getElementById("aparecer1_19").style.display = "none";
    prelavadoff19 = 1;
}

//-------------------------------------------------------------------------- 20

var prelavadon20= 1;
function prelavado20_1(){ 
    document.getElementById("prelavadon20").style.display = "block";
    document.getElementById("prelavadoff20").style.display = "none";
    document.getElementById("aparecer1_20").style.display = "block";
    prelavadon20 = 1;
}


var prelavadoff20= 1;
function prelavado20_2(){ 
    document.getElementById("prelavadoff20").style.display = "block";
    document.getElementById("prelavadon20").style.display = "none";
    document.getElementById("aparecer1_20").style.display = "none";
    prelavadoff20 = 1;
}


//-------------------------------------------------------------------------- 21

var prelavadon21= 1;
function prelavado21_1(){ 
    document.getElementById("prelavadon21").style.display = "block";
    document.getElementById("prelavadoff21").style.display = "none";
    document.getElementById("aparecer1_21").style.display = "block";
    prelavadon21 = 1;
}


var prelavadoff21 = 1;
function prelavado21_2(){ 
    document.getElementById("prelavadoff21").style.display = "block";
    document.getElementById("prelavadon21").style.display = "none";
    document.getElementById("aparecer1_21").style.display = "none";
    prelavadoff21 = 1;
}


//-------------------------------------------------------------------------- 22

var prelavadon22= 1;
function prelavado22_1(){ 
    document.getElementById("prelavadon22").style.display = "block";
    document.getElementById("prelavadoff22").style.display = "none";
    document.getElementById("aparecer1_22").style.display = "block";
    prelavadon22 = 1;
}


var prelavadoff22= 1;
function prelavado22_2(){ 
    document.getElementById("prelavadoff22").style.display = "block";
    document.getElementById("prelavadon22").style.display = "none";
    document.getElementById("aparecer1_22").style.display = "none";
    prelavadoff22 = 1;
}

