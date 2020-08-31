        const FRONT = "card_front"
        const BACK  = "card_back"
        const CARD = "card"
        const ICON = "icon"
        var jogador = "";
        function capturarNome() {
            jogador = document.getElementById('jogador').value;
            document.getElementById('jogador1').innerHTML = jogador;
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
                iconElement.src = card.icon;
                cardElementFace.appendChild(iconElement);
            }else{
                cardElementFace.innerHTML = "&lt/&gt";
            }
            element.appendChild(cardElementFace)
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
                    
                
                
                if (game.checkMatch()){
                    game.clearCards();
                    if (game.checkGameOver()){
                        setTimeout(() => {
                        let gameOverLayer = document.getElementById("gameOver");
                        gameOverLayer.style.display = 'flex';
                        pause();
                        }, 1100);
                    }
                }else{

                    setTimeout(() => {
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
    let gameOverLayer = document.getElementById("gameOver");
    gameOverLayer.style.display = 'none';
    
    
}
function gameOn() {
    document.getElementById("telaInicial").style.display = 'none';
}




