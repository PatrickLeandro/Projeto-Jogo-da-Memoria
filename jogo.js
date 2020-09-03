let game = {


    lockMode: false,
    firstCard: null,
    secondCard: null,

    setCard: function (id) {

    let card =  this.cards.filter(card=>card.id===id)[0];
    console.log(card);
        if (card.flipped || this.lockMode) {
            return false;   
        }
            if (!this.firstCard) {
                this.firstCard = card;
                this.firstCard.flipped = true;
                return true;
            }else{
                this.secondCard = card;
                this.lockMode = true;                    
                this.secondCard.flipped = true;
                return true;
            }



    },
    checkMatch: function () {
      if (!this.firstCard || !this.secondCard) {
          return false;
      }  
      return this.firstCard.icon === this.secondCard.icon; 
    },

    clearCards: function () {
        this.firstCard = null;
        this.secondCard = null;
        this.lockMode = false;
    },

    unflipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver(){
                      
       
        return  this.cards.filter(card=>!card.flipped).length == 0;
      

    },




    fotos: [
        '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ],

    

    cards:  null,

    createCardsFromFotos: function() {
        this.cards = [];
        this.fotos.forEach((foto) => {
            this.cards.push(this.createPairFromFoto(foto));
        })
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;

    },

    createPairFromFoto: function (foto) {
        return[{
            id: this.createIdWithFoto(foto),
            icon: foto,
            flipped: false,
        },{
            id: this.createIdWithFoto(foto),
            icon: foto,
            flipped: false,
        }]
    },



    createIdWithFoto: function (foto){
        return foto + parseInt(Math.random() * 1000);
    },

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0 ) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    },
}




