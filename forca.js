var botaoIniciarJogo = document.getElementById("iniciar-jogo"); 

var listaPalavras = ['ALURA','ORACLE','JAVA','CARRO','COMPUTADOR','MONTANHA','IGREJA'];
var palavraSorteada
var letraDig
var erro = 0

function sorteiaPalavra(){

    var indice = Math.round(Math.random() * (listaPalavras.length-1));
    return listaPalavras[indice];

}

function inicioDoJogo() {
    palavraSorteada = sorteiaPalavra();
    limpatela();
    let x = 600;
    let y = 450;

    for(i=0; i<=(palavraSorteada.length-1);i++){
        linhaDaPalavra(x,y);
        x=x+50
    }

    desenhatriangulo();
    console.log(palavraSorteada);

    return(palavraSorteada);
    return erro = 0;
}

botaoIniciarJogo.onclick = inicioDoJogo;

function verificaLetraDig (){
    let x =600 
    let y =447
    let x1 = 200
    let y1 = 550
    if(palavraSorteada.includes(letraDig)){
        for (i=0; i<=(palavraSorteada.length-1); i++){
            if (palavraSorteada[i]==letraDig){
                pincel.fillText(letraDig,x,y)
                
            }
            x=x+50
        }
    }else{
        
        while(erro<=9){
            if(erro==0){
                segundoRetangulo();
                pincel.fillText(letraDig,200,550);
                erro++;
                break;
        

            }else if(erro==1){
                terceiroRetangulo();
                pincel.fillText(letraDig,250,550);
                erro++;
                break;
            

            }else if(erro==2){
                quartoRetangulo();
                pincel.fillText(letraDig,300,550);
                erro++;
                break;
            

            }else if(erro==3){
                circuloCabeca();
                pincel.fillText(letraDig,350,550);
                erro++;
                break;
            

            }else if(erro==4){
                linhaCorpo();
                pincel.fillText(letraDig,400,550);
                erro++;
                break;
            

            }else if(erro==5){
                linhaBracoE();
                pincel.fillText(letraDig,450,550);
                erro++;
                break;
            

            }else if(erro==6){
                linhaBracoD();
                pincel.fillText(letraDig,500,550);
                erro++;
                break;
            

            }else if(erro==7){
                linhaPernaD();
                pincel.fillText(letraDig,550,550);
                erro++;
                break;
            

            }else if(erro==8){
                linhaPernaE();
                pincel.fillText(letraDig,600,550);
                pincel.fillText("Voçê Perdeu!!!!!",600,300);
                erro++;
                break;
            }
            erro++

            break;
        }
    }

}



document.addEventListener ('keypress', (event) => {
    letraDig = event.key;
    letraDig = letraDig.toUpperCase()
    verificaLetraDig()

  });


