document.getElementById('vencedor').innerHTML = "Quem venceu foi " + JSON.parse(localStorage.getItem('Vencedor')).nome;
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

let PlayerTempInfo1 = JSON.parse(localStorage.getItem('infoPlayer1'));
let PlayerTempInfo2 = JSON.parse(localStorage.getItem('infoPlayer2'));

removerUsuarioPorNome(PlayerTempInfo1);
removerUsuarioPorNome(PlayerTempInfo2);
adicionarPontuacao(PlayerTempInfo1, PlayerTempInfo2);

function adicionarPontuacao(infoPlayer1, infoPlayer2) {
    let scoreTotal = JSON.parse(localStorage.getItem('TotalScore')) || [];

    scoreTotal.push(infoPlayer1);
    scoreTotal.push(infoPlayer2);

    localStorage.setItem('TotalScore', JSON.stringify(scoreTotal));
}

function removerUsuarioPorNome(nomeUsuario) {
    let scoreTotal = JSON.parse(localStorage.getItem('TotalScore')) || [];
  
    const indice = scoreTotal.findIndex(jogador => jogador.nome === nomeUsuario.nome);

    if (indice !== -1) {
      scoreTotal.splice(indice, 1);
      localStorage.setItem('TotalScore', JSON.stringify(scoreTotal));
    }
  }