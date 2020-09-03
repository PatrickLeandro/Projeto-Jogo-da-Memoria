        const FRONT = "card_front";
        const BACK  = "card_back";
        const CARD = "card";
        const ICON = "icon";
        var jogador = "";
        var jogadas = 0;
        var acertos = 0;
        var erros = 0;
        var escolha = 1;
        var temaEscolhido = document.getElementsByName('tema');



        
        function escolhaTema() {
               
            if (temaEscolhido[0].checked) {
                escolha = 0;
            }   else if(temaEscolhido[1].checked){
                        escolha = 1;
                    }   else{
                            escolha = 2
                }
        }

        



function escolhaTema() {

    
    var temaEscolhido = document.getElementsByName('tema');

    if (temaEscolhido[0].checked) {
        escolha = 0;
    }
    else if (temaEscolhido[1].checked) {
        escolha = 1;
    }
    else {
        escolha = 2;
    }
}



        function capturarNome() {
            jogador = document.getElementById('jogador').value;
            document.getElementById('jogador1').innerHTML ="Jogador: "+ jogador;
        }

        

        
        startGame();

        function startGame() {
            initializeCards(game.createCardsFromFotos());

            }

        function initializeCards(cards) {
            let gameBoard = document.getElementById("gameBoard");
            gameBoard.innerHTML = '';
            game.cards.forEach(card => {
                let cardElement = document.createElement('div');
                cardElement.id = card.id;
                cardElement.classList.add(CARD);
                cardElement.dataset.icon = card.icon;
                creatCardContent(card, cardElement);
                cardElement.addEventListener('click', flipCard)
                gameBoard.appendChild(cardElement);
            });

        }

        function creatCardContent(card, cardElement) {
            
            createCardFace(FRONT, card, cardElement);
            createCardFace(BACK, card, cardElement);

        }
        function createCardFace(face, card, element) {
            let cardElementFace = document.createElement('div');
            cardElementFace.classList.add(face);
            if (face === FRONT) {
                let iconElement = document.createElement('img');
                iconElement.classList.add(ICON);
                if (escolha == 0) {
                    iconElement.src = "./icons/marvel/" + card.icon + ".jpeg";
                } else if (escolha == 1) {
                         iconElement.src = "./icons/dc/" + card.icon + ".jpeg";
                        } else {
                        iconElement.src = "./icons/infantil/" + card.icon + ".jpeg";
                 }
                cardElementFace.appendChild(iconElement);
            }else{
                cardElementFace.innerHTML = "&lt/&gt";
            }
            element.appendChild(cardElementFace);
        }

        


        
        
    var a = 0;

    function flipCard() {
        if (game.setCard(this.id)) {
           
            if (a == 0) {
                start();
                a = 1;
            }
            this.classList.add("flip");
            if (game.secondCard) {
                    
                
                jogadas++;

                if (game.checkMatch()){
                        game.clearCards();
                        acertos++;    
                        document.getElementById('jogadas').innerHTML="Jogadas: " + jogadas;
                        document.getElementById('acertos').innerHTML="Acertos: " + acertos;
                        if (game.checkGameOver()){
                            setTimeout(() => {                               
                                let gameOverLayer = document.getElementById("gameOver");
                                gameOverLayer.style.display = 'flex';
                                pause();
                            }, 1100);
                        }
                }else{

                    setTimeout(() => {
                        
                        erros++;
                        document.getElementById('jogadas').innerHTML="Jogadas: " + jogadas;
                        document.getElementById('erros').innerHTML="Erros: " + erros;

                        let firstCardView = document.getElementById(game.firstCard.id);
                        let secondCardView = document.getElementById(game.secondCard.id);

                        firstCardView.classList.remove('flip');
                        secondCardView.classList.remove('flip');
                        game.unflipCards();

                    }, 1000);
                };

            }
        }
    }


function restart() {
    game.clearCards();
    startGame();
    a = 0
    jogadas = 0;
    acertos = 0;
    erros = 0; 
    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';
    
    
}
function gameOn() {
    document.getElementById("telaInicial").style.display = 'none';
}




