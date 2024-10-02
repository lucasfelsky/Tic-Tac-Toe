let temJogo = JSON.parse(localStorage.getItem('Jogo Iniciado'));
if (temJogo == true){
    window.location.href = "jogo.html";
}

let formaEscolhidaPlayer1 = "";
let formaEscolhidaPlayer2 = "";
let player1Name = "";
let player2Name = "";
gameStorage = localStorage;

document.querySelector('#player1name').addEventListener('change', function(){
    player1Name = document.querySelector('#player1name').value;
    let regexName = /^[A-Z,a-z,0-9,ç,á,é,í,ó,ú,ã,\.,_,\-,@]+$/;
    if(regexName.test(player1Name)){
        document.getElementById('seletorForma').style.display = 'block';
    } else {
        document.getElementById('seletorForma').style.display = 'none';
        document.getElementById('jogador2').style.display = 'none';
        document.querySelector('#player2name').value = "";
        formaEscolhidaPlayer1 = ""
    }    
})

document.querySelector('#circle').addEventListener('click', function(){
    formaEscolhidaPlayer1 = "Círculo";
    document.getElementById('jogador2').style.display = 'block';
})

document.querySelector('#cross').addEventListener('click', function(){
    formaEscolhidaPlayer1 = "X";
    document.getElementById('jogador2').style.display = 'block';
})

document.querySelector('#player2name').addEventListener('change', function(){
    player2Name = document.querySelector('#player2name').value;
    let regexName = /^[A-Z,a-z,0-9,ç,á,é,í,ó,ú,ã,\.,_,\-,@]+$/;
    if(regexName.test(player2Name)){
        document.getElementById('botaoEnviarPlayer').style.display = 'block';
    } else {
        document.getElementById('botaoEnviarPlayer').style.display = 'none';
    }    
})

document.querySelector('#sendButton').addEventListener('click', function(){
    if(formaEscolhidaPlayer1 == "X"){ 
        formaEscolhidaPlayer2 = "Círculo";
    } else {
        formaEscolhidaPlayer2 = "X";
    }
    window.location.href = "jogo.html";
})

const infoPlayer1 = {
    nome: "",
    forma: "",
    pontos: 0
}

const infoPlayer2 = {
    nome: "",
    forma: "",
    pontos: 0
}

document.querySelector('#botaoEnviarPlayer').addEventListener('click', function(){
    infoPlayer1.nome = player1Name;
    infoPlayer1.forma = formaEscolhidaPlayer1;
    localStorage.setItem('infoPlayer1', JSON.stringify(infoPlayer1));
    infoPlayer2.nome = player2Name;
    infoPlayer2.forma = formaEscolhidaPlayer2;
    localStorage.setItem('infoPlayer2', JSON.stringify(infoPlayer2));
})