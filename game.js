const player1 = 'X'
const player2 = 'O'
var playTime = player1
var gameOver = false
var movimentos=0;


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
				movimentos++;
				atualizaMostrador()
				verificarVencedor()
			}
		});
				
	}
}

async function verificarVencedor(){
	var a1 = document.getElementById('a1').getAttribute("jogada")
	var a2 = document.getElementById('a2').getAttribute("jogada")
	var a3 = document.getElementById('a3').getAttribute("jogada")

	var b1 = document.getElementById('b1').getAttribute("jogada")
	var b2 = document.getElementById('b2').getAttribute("jogada")
	var b3 = document.getElementById('b3').getAttribute("jogada")

	var c1 = document.getElementById('c1').getAttribute("jogada")
	var c2 = document.getElementById('c2').getAttribute("jogada")
	var c3 = document.getElementById('c3').getAttribute("jogada")

	var vencedor = ""

	if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "")){
		vencedor = a1
	}
	if((b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "") || (b2 == b1 && b2 == b3 && b2 != "")){
		vencedor = b2
	}
	if((c3 == a3 && c3 == b3  && c3 != "") || (c3 == c1 && c3 == c2  && c3 != "")){
		vencedor = c3
	}

	if(vencedor != "" && vencedor != null){
		gameOver = true

		await sleep(50)
		alert('O ganhador foi o: ' + vencedor)
	}else{
		if(movimentos == 9){
			await sleep(50)
			alert('Deu velha!')
		}
	}
	
	function sleep(ms){

		return new Promise(resolve => setTimeout(resolve, ms))
	}
}

function reiniciarPartida(){
	window.location.href = "index.html"
}


