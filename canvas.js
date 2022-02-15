
var tela = document.getElementById("forca");
var pincel = tela.getContext("2d");


pincel.font = "50px Arial Black";
pincel.fillStyle = 'gray';
pincel.fillRect(0, 0, 1200, 600);

pincel.lineWidth = 5

function limpatela(){
    pincel.fillStyle = 'gray';
    pincel.fillRect(0, 0, 1200, 600);

}

function desenhatriangulo(){ 
    pincel.fillStyle="black";
    pincel.beginPath();
    pincel.moveTo(0,600);
    pincel.lineTo(100,500);
    pincel.lineTo(200,600);
    pincel.fill();   

}

function primeiroRetangulo(){
    pincel.fillStyle ="black";
    pincel.fillRect(90,400,10,320);
}

function segundoRetangulo(){
    pincel.fillStyle ="black";
    pincel.fillRect(95,100,10,450);
}

function terceiroRetangulo(){
    pincel.fillStyle ="black";
    pincel.fillRect(80,90,320,10);   
}

function quartoRetangulo() {
    pincel.fillStyle ="black";
    pincel.fillRect(380,80,10,100);   
}

function circuloCabeca(){
    pincel.fillStyle="black";
    pincel.beginPath();

    pincel.arc(385, 200, 50, 0, 2*3.14);
    pincel.fill();
}

function linhaCorpo(){
    pincel.fillStyle ="black";
    pincel.fillRect(380,250,10,200);   
}

function linhaBracoE(){
    pincel.fillStyle ="black";
    pincel.beginPath()
    pincel.moveTo(380,300);
    pincel.lineTo(280,280);
    pincel.stroke();
     
}

function linhaBracoD(){
    pincel.fillStyle ="black";
    pincel.beginPath()
    pincel.moveTo(390,300);
    pincel.lineTo(480,280);
    pincel.stroke();
     
}

function linhaPernaD(){
    pincel.fillStyle ="black";
    pincel.beginPath()
    pincel.moveTo(385,440);
    pincel.lineTo(500,500);
    pincel.stroke();
     
}

function linhaPernaE(){
    pincel.fillStyle ="black";
    pincel.beginPath()
    pincel.moveTo(385,440);
    pincel.lineTo(270,500);
    pincel.stroke();
     
}

function linhaDaPalavra(x,y){
    pincel.fillStyle ="black";
    pincel.fillRect(x,y,45,5);

}

function msgFim(){
    pincel.fillText('Você Pedeu!!!!!!',500,300);
}

