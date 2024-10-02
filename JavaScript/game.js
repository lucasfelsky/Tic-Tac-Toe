let PlayerTempInfo1 = JSON.parse(localStorage.getItem('infoPlayer1'));
let PlayerTempInfo2 = JSON.parse(localStorage.getItem('infoPlayer2'));
let vez = "p1";
let clicks = 0;
let vitoriaP1 = false;
let vitoriaP2 = false;
let players = [];
localStorage.setItem('Jogo Iniciado', true);
 
document.getElementById('mostradorVez').innerHTML = "VEZ DE: " + PlayerTempInfo1.nome.toUpperCase();
if (PlayerTempInfo1.forma == "Círculo"){
    document.getElementById('player1').style.backgroundColor = "green";
} else {
    document.getElementById('player1').style.backgroundColor = "red";
}

if (PlayerTempInfo2.forma== "Círculo"){
    document.getElementById('player2').style.backgroundColor = "green";
} else {
    document.getElementById('player2').style.backgroundColor = "red";
}

document.querySelector('#janelaJogo').addEventListener('click', function(event){
    const squareId = event.target.id;
    clicks++;

    if(vez == "p1"){        
        if (PlayerTempInfo1.forma == "Círculo"){
            document.getElementById(squareId).style.backgroundColor = "green";
            document.getElementById(squareId).classList.add('clicado');
            document.getElementById(squareId).classList.add('p1');
        } else {
            document.getElementById(squareId).style.backgroundColor = "red";
            document.getElementById(squareId).classList.add('clicado');
            document.getElementById(squareId).classList.add('p1');
        }
        document.getElementById('mostradorVez').innerHTML = "VEZ DE: " + PlayerTempInfo2.nome.toUpperCase();
        vez = "p2";
    } else {
        if (PlayerTempInfo2.forma == "Círculo"){
            document.getElementById(squareId).style.backgroundColor = "green";
            document.getElementById(squareId).classList.add('clicado');
            document.getElementById(squareId).classList.add('p2');
        } else {
            document.getElementById(squareId).style.backgroundColor = "red";
            document.getElementById(squareId).classList.add('clicado');
            document.getElementById(squareId).classList.add('p2');
        }
        document.getElementById('mostradorVez').innerHTML = "VEZ DE: " + PlayerTempInfo1.nome.toUpperCase();
        vez = "p1";
    }

    verificadorVencedor();
})

function verificadorVencedor(){
    const S1 = document.getElementById('square1');
    const S2 = document.getElementById('square2');
    const S3 = document.getElementById('square3');
    const S4 = document.getElementById('square4');
    const S5 = document.getElementById('square5');
    const S6 = document.getElementById('square6');
    const S7 = document.getElementById('square7');
    const S8 = document.getElementById('square8');
    const S9 = document.getElementById('square9');

    if(S1.classList.contains('p1') && S2.classList.contains('p1') && S3.classList.contains('p1')){
        vitoriaP1 = true;
    }
    if(S4.classList.contains('p1') && S5.classList.contains('p1') && S6.classList.contains('p1')){
        vitoriaP1 = true;
    }
    if(S7.classList.contains('p1') && S8.classList.contains('p1') && S9.classList.contains('p1')){
        vitoriaP1 = true;
    }

    if(S1.classList.contains('p1') && S4.classList.contains('p1') && S7.classList.contains('p1')){
        vitoriaP1 = true;
    }

    if(S2.classList.contains('p1') && S5.classList.contains('p1') && S8.classList.contains('p1')){
        vitoriaP1 = true;
    }

    if(S3.classList.contains('p1') && S6.classList.contains('p1') && S9.classList.contains('p1')){
        vitoriaP1 = true;
    }

    if(S1.classList.contains('p1') && S5.classList.contains('p1') && S9.classList.contains('p1')){
        vitoriaP1 = true;
    }

    if(S3.classList.contains('p1') && S5.classList.contains('p1') && S7.classList.contains('p1')){
        vitoriaP1 = true;
    } 

    if(S1.classList.contains('p2') && S2.classList.contains('p2') && S3.classList.contains('p2')){
        vitoriaP2 = true;
    }    
    
    if(S4.classList.contains('p2') && S5.classList.contains('p2') && S6.classList.contains('p2')){
        vitoriaP2 = true;
    }
    if(S7.classList.contains('p2') && S8.classList.contains('p2') && S9.classList.contains('p2')){
        vitoriaP2 = true;
    }

    if(S1.classList.contains('p2') && S4.classList.contains('p2') && S7.classList.contains('p2')){
        vitoriaP2 = true;
    }

    if(S2.classList.contains('p2') && S5.classList.contains('p2') && S8.classList.contains('p2')){
        vitoriaP2 = true;
    }

    if(S3.classList.contains('p2') && S6.classList.contains('p2') && S9.classList.contains('p2')){
        vitoriaP2 = true;
    }

    if(S1.classList.contains('p2') && S5.classList.contains('p2') && S9.classList.contains('p2')){
        vitoriaP2 = true;
    }

    if(S3.classList.contains('p2') && S5.classList.contains('p2') && S7.classList.contains('p2')){
        vitoriaP2 = true;
    } 


    if(vitoriaP1 == true){
        PlayerTempInfo1.pontos++;        
        localStorage.setItem('Vencedor', JSON.stringify(PlayerTempInfo1));
        window.location.href = "confContinuar.html";

    }
    if(vitoriaP2 == true){
        PlayerTempInfo2.pontos++;        
        localStorage.setItem('Vencedor', JSON.stringify(PlayerTempInfo2));
        window.location.href = "confContinuar.html";
    }

    if(clicks == 9 && vitoriaP1 == false && vitoriaP2 == false){
        window.location.href = "empate.html";
    }

    localStorage.setItem('infoPlayer1', JSON.stringify(PlayerTempInfo1));
    localStorage.setItem('infoPlayer2', JSON.stringify(PlayerTempInfo2));
}

document.getElementById('player1').innerHTML = PlayerTempInfo1.nome.toUpperCase() + ": " + PlayerTempInfo1.pontos;
document.getElementById('player2').innerHTML = PlayerTempInfo2.nome.toUpperCase() + ": " + PlayerTempInfo2.pontos;

