function reproducir(){
	videoUNO=document.getElementById('videorepo');
	videoUNO.play();
}

let contador=0;
	function tiempovideo(){
	var videoMINIcanvas =document.getElementById('videomini').style.display='none';
	var videoMINIcanvas2 =document.getElementById('videomini2').style.display='none';	
	var videoUNO=document.getElementById('videorepo'); 

// pausa video numero1
if(videoUNO.currentTime.toFixed(2)>=45 && videoUNO.currentTime.toFixed(2)<=46){

	 videoUNO.pause();
	 document.getElementById('videomini').style.display='block';
	 document.getElementById('videomini2').style.display='block';
	 contador=1;	
	}
// pausa video numero2

if(videoUNO.currentTime.toFixed(2)>=127.8 && videoUNO.currentTime.toFixed(1)<=128.7){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=2;

	}
// pausa video numero3

if(videoUNO.currentTime.toFixed(2)>=203.70 && videoUNO.currentTime.toFixed(1)<=204.40){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=3;

	}
// pausa video numero4

if(videoUNO.currentTime.toFixed(0)>=262 && videoUNO.currentTime.toFixed(0)<=262.8){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=4;

	}
// pausa video numero5

	if(videoUNO.currentTime.toFixed(0)>=322 && videoUNO.currentTime.toFixed(0)<=322.9){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=5;

	}
	// pausa video numero6

	if(videoUNO.currentTime.toFixed(1)>=416.8 && videoUNO.currentTime.toFixed(2)<=417.55){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=6;

	}
	// pausa video numero7

 }

 function iniciovideomini(){
	var videoMINIcanvas =document.getElementById('videomini').style.display='none';
	var videoMINIcanvas2 =document.getElementById('videomini2').style.display='none';		 
		
// condicion video numero1
			if(contador==1){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
// condicion video numero2

		if(contador ==2){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
		// condicion video numero3

		if(contador ==3){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
		// condicion video numero4

		if(contador ==4){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
		// condicion video numero5

		if(contador ==5){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
			// condicion video numero6

			if(contador ==6){
				videoMINIcanvas.play();
				videoMINIcanvas2.play();
			}
				// condicion video numero7


	}
 function cambiarvideo(){
	 
	// funcion video numero1

	//saber más
	if(contador==1){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=46.40;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
		}
	// funcion video numero2

	if(contador==2){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=129;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
	}
		// funcion video numero3

		if(contador==3){
			var videoUNO=document.getElementById('videorepo'); 
			videoUNO.currentTime=204.60;
			videoUNO.play();
			document.getElementById('videomini').style.display='none';
			document.getElementById('videomini2').style.display='none';
		}
			// funcion video numero4

	if(contador==4){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=262.8;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
	}
		// funcion video numero5

		if(contador==5){
			var videoUNO=document.getElementById('videorepo'); 
			videoUNO.currentTime=322.6;
			videoUNO.play();
			document.getElementById('videomini').style.display='none';
			document.getElementById('videomini2').style.display='none';
		}
			// funcion video numero6

	if(contador==6){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=417.75;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
	}
			// funcion video numero7

 }

//  funciones para elegir la opcion azul 
//---------------------------------------------
// -----------------------------------------------
// -----------------------------------------------

function tiempovideo(){
	var videoMINIcanvas =document.getElementById('videomini').style.display='none';
	var videoMINIcanvas2 =document.getElementById('videomini2').style.display='none';	
	var videoUNO=document.getElementById('videorepo'); 

	// tiempo para video1
	if(videoUNO.currentTime.toFixed(2)>=45 && videoUNO.currentTime.toFixed(2)<=46){

	 videoUNO.pause();
	//  document.getElementById('videomini').style.display='block';
	 document.getElementById('videomini').style.display='block';
	 document.getElementById('videomini2').style.display='block';
	 contador=1;
	}
	// tiempo para video2

	if(videoUNO.currentTime.toFixed(2)>=127.8 && videoUNO.currentTime.toFixed(1)<=128.7){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=2;
	}
	// tiempo para video3

	if(videoUNO.currentTime.toFixed(2)>=203.70 && videoUNO.currentTime.toFixed(1)<=204.40){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=3;
	}
	// tiempo para video4

	if(videoUNO.currentTime.toFixed(0)>=261.8 && videoUNO.currentTime.toFixed(0)<=262.6){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=4;
	}
	// tiempo para video5

	if(videoUNO.currentTime.toFixed(0)>=322 && videoUNO.currentTime.toFixed(0)<=322.6){
		videoUNO.pause();
		document.getElementById('videomini').style.display='block';
		document.getElementById('videomini2').style.display='block';
		contador=5;
	}
		// tiempo para video6

		if(videoUNO.currentTime.toFixed(1)>=416.8 && videoUNO.currentTime.toFixed(2)<=417.55){
			videoUNO.pause();
			document.getElementById('videomini').style.display='block';
			document.getElementById('videomini2').style.display='block';
			contador=6;
		}
			// tiempo para video7


 }

 function iniciovideomini(){
	var videoMINIcanvas =document.getElementById('videomini').style.display='none';
	var videoMINIcanvas2 =document.getElementById('videomini2').style.display='none';		 
		
	// para video1
	if(contador==1){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
	// para video2

		if(contador ==2){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
		// para video3

		if(contador ==3){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
		// para video4

		if(contador ==4){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
		// para video5

		if(contador ==5){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
		// para video6

		if(contador ==6){
			videoMINIcanvas.play();
			videoMINIcanvas2.play();
		}
		// para video7


	}

 function cambiarvideo2(){

	// funcion para video1
	if(contador==1){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=129;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
		}
	// funcion para video2
	if(contador==2){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=262.8;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
	}
	// funcion para video3
	if(contador==3){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=262.8;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
	}
	// funcion para 4
	if(contador==4){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=322.6;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
	}
	// funcion para video5
	if(contador==5){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=417.75;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
	}
	// funcion para video6
	if(contador==6){
		var videoUNO=document.getElementById('videorepo'); 
		videoUNO.currentTime=0;
		videoUNO.play();
		document.getElementById('videomini').style.display='none';
		document.getElementById('videomini2').style.display='none';
	}
	

 }

//  inicio funciones anyjam
// ------------------------------------
// ------------------------------------
// ------------------------------------
// ------------------------------------
if (annyang) {
	// Reconocimiento
	//Comandos de voz
	var comandos = {
		abort: function () { autoRestart = false; if (isInitialized) { recognition.abort(); } }, 
	  
			'reproducir':reproducir,
			'pausar':pauseVideo, 
			'subir' :subirVideo,
			'bajar' :bajarVideo,
			'uno' :cambiarvideo,
			'dos':cambiarvideo2

			
	};

	annyang.addCommands(comandos);
	annyang.setLanguage('es-CO');
	annyang.debug();
	annyang.start({ autoRestart: false, continuous: true });



var boton;
var videoUNO;
// var tiempoUNO=videoUNO.currentTime;
var videoDOS;




function iniciar() {

//boton=document.getElementById('boton'); 
videoUNO=document.getElementById('videorepo');
videoDOS=document.getElementById('segundovideo') ;

//boton.addEventListener('click',reproducir, false); 


}

//CONTOLA EL ESTADO DE LOS VIDEOS


//Aqui esta el error
function pauseVideo() {



videoUNO=document.getElementById('videorepo'); 
videoUNO.pause();
 



}

function subirVideo() {

 if (contador==1) {
	videoUNO.volume = 0.1;
	videoUNO=document.getElementById('videorepo'); 
	videoUNO.volume += 0.1;
  
 }
 else
 {
	videoDOS=document.getElementById('segundovideo');
	videoDOS.volume = 0.1;
	videoDOS.volume += 0.1;
   

 }

}

function bajarVideo() {
 if (contador==1) {
	videoUNO=document.getElementById('videorepo'); 
	videoUNO.volume -= 0.1;
	contador=1;
 }
 else 
 {
	videoDOS=document.getElementById('segundovideo');
	videoDOS.volume -= 0.1;
	contador=1;

 }
}
}	
