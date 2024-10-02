let temJogo = JSON.parse(localStorage.getItem('Jogo Iniciado'));
if (temJogo == true){
    document.getElementById('playButton').textContent = "NOVO JOGO";
    document.getElementById('continueButton').style.display = 'inline';
}

document.querySelector('#playButton').addEventListener('click', function(){
    window.location.href = "jogadores.html";
    localStorage.setItem('Jogo Iniciado', false);
})

document.querySelector('#continueButton').addEventListener('click', function(){
    window.location.href = "jogo.html";
})