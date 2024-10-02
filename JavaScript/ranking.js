let records = JSON.parse(localStorage.getItem('TotalScore')) || [{nome: "No Data", forma: "No Data", pontos: 0}];


records.sort(function(a, b) {
    return b.pontos - a.pontos;
  });

if(records.length == 1){
  document.getElementById('firstPlayer').innerHTML = records[0].nome;
  document.getElementById('firstScore').innerHTML = records[0].pontos;
}
if(records.length == 2){
  document.getElementById('firstPlayer').innerHTML = records[0].nome;
  document.getElementById('firstScore').innerHTML = records[0].pontos;
  document.getElementById('secondPlayer').innerHTML = records[1].nome;
  document.getElementById('secondScore').innerHTML = records[1].pontos;
}
if(records.length == 3){
  document.getElementById('firstPlayer').innerHTML = records[0].nome;
  document.getElementById('firstScore').innerHTML = records[0].pontos;
  document.getElementById('secondPlayer').innerHTML = records[1].nome;
  document.getElementById('secondScore').innerHTML = records[1].pontos;
  document.getElementById('thirdPlayer').innerHTML = records[2].nome;
  document.getElementById('thirdScore').innerHTML = records[2].pontos;
}
if(records.length == 4){
  document.getElementById('firstPlayer').innerHTML = records[0].nome;
  document.getElementById('firstScore').innerHTML = records[0].pontos;
  document.getElementById('secondPlayer').innerHTML = records[1].nome;
  document.getElementById('secondScore').innerHTML = records[1].pontos;
  document.getElementById('thirdPlayer').innerHTML = records[2].nome;
  document.getElementById('thirdScore').innerHTML = records[2].pontos;
  document.getElementById('fourthPlayer').innerHTML = records[3].nome;
  document.getElementById('fourthScore').innerHTML = records[3].pontos; 
}
if(records.length == 5){
  document.getElementById('firstPlayer').innerHTML = records[0].nome;
  document.getElementById('firstScore').innerHTML = records[0].pontos;
  document.getElementById('secondPlayer').innerHTML = records[1].nome;
  document.getElementById('secondScore').innerHTML = records[1].pontos;
  document.getElementById('thirdPlayer').innerHTML = records[2].nome;
  document.getElementById('thirdScore').innerHTML = records[2].pontos;
  document.getElementById('fourthPlayer').innerHTML = records[3].nome;
  document.getElementById('fourthScore').innerHTML = records[3].pontos;
  document.getElementById('fifthPlayer').innerHTML = records[4].nome;
  document.getElementById('fifthScore').innerHTML = records[4].pontos;
}
if(records.length == 6){
  document.getElementById('firstPlayer').innerHTML = records[0].nome;
  document.getElementById('firstScore').innerHTML = records[0].pontos;
  document.getElementById('secondPlayer').innerHTML = records[1].nome;
  document.getElementById('secondScore').innerHTML = records[1].pontos;
  document.getElementById('thirdPlayer').innerHTML = records[2].nome;
  document.getElementById('thirdScore').innerHTML = records[2].pontos;
  document.getElementById('fourthPlayer').innerHTML = records[3].nome;
  document.getElementById('fourthScore').innerHTML = records[3].pontos;
  document.getElementById('fifthPlayer').innerHTML = records[4].nome;
  document.getElementById('fifthScore').innerHTML = records[4].pontos;
  document.getElementById('sixthPlayer').innerHTML = records[5].nome;
  document.getElementById('sixthScore').innerHTML = records[5].pontos;
}
if(records.length == 7){
  document.getElementById('firstPlayer').innerHTML = records[0].nome;
  document.getElementById('firstScore').innerHTML = records[0].pontos;
  document.getElementById('secondPlayer').innerHTML = records[1].nome;
  document.getElementById('secondScore').innerHTML = records[1].pontos;
  document.getElementById('thirdPlayer').innerHTML = records[2].nome;
  document.getElementById('thirdScore').innerHTML = records[2].pontos;
  document.getElementById('fourthPlayer').innerHTML = records[3].nome;
  document.getElementById('fourthScore').innerHTML = records[3].pontos;
  document.getElementById('fifthPlayer').innerHTML = records[4].nome;
  document.getElementById('fifthScore').innerHTML = records[4].pontos;
  document.getElementById('sixthPlayer').innerHTML = records[5].nome;
  document.getElementById('sixthScore').innerHTML = records[5].pontos;
  document.getElementById('seventhPlayer').innerHTML = records[6].nome;
  document.getElementById('seventhScore').innerHTML = records[6].pontos;
}

console.log(records); 

document.querySelector('#botaoResetRanking').addEventListener('click', function(){
    for(let i = 0; i < records.length; i++){
      records[i] = {
        nome: "No Data",
        forma: "",
        pontos: 0
      }
    }
    localStorage.setItem('Jogo Iniciado', false);
    localStorage.removeItem('TotalScore');
    location.reload();
})