document.getElementById('empate').innerHTML = "A partida empatou";
document.getElementById('backMenu').addEventListener('click', function(){
    window.location.href = "index.html";
    localStorage.setItem('Jogo Iniciado', false);
})
document.getElementById('retry').addEventListener('click', function(){
    window.location.href = "jogo.html";
    localStorage.setItem('Jogo Iniciado', true);
})
document.getElementById('checkRanking').addEventListener('click', function(){
    window.location.href = "ranking.html";
    localStorage.setItem('Jogo Iniciado', true);
})