const player1 = 'X'
const player2 = 'O'
var playTime = player1
var gameOver = false


atualizaMostrador()
inicializarEspacos()

//função para atualizar a imagem davez do jogador no mostrador.
function atualizaMostrador(){

	if(gameOver){
		return
	}
	if(playTime == player1){
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "imagens/x.png")
	} else{
		/* o métodoquerySelectorAll retorna todos os elementos num documento
		que seja igual a um seletor CSS como um objeto de nodeList estática*/
		var player = document.querySelectorAll("div#mostrador img")[0];
		player.setAttribute("src", "imagens/circulo.png")
	}
}

//função para inserir 'X' ou 'O' nos espaços do tabuleiro
function inicializarEspacos(){
	var espacos = document.getElementsByClassName("espaco");
	for(var i=0; i<espacos.length; i++){

		espacos[i].addEventListener("click", function(){
			if(gameOver){
				return
			}
			if(this.getElementsByTagName('img').length == 0){
				if(playTime == player1){
					this.innerHTML = "<img src = 'imagens/x.png' height='50'>"
					this.setAttribute("jogada", player1)
					playTime = player2
				}
				else{
					this.innerHTML = "<img src = 'imagens/circulo.png' height='50'>"
					this.setAttribute("jogada", player2)
					playTime = player1
				}
				atualizaMostrador()
			}
		});
				
	}
}
