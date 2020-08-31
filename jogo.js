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
        
        'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/75442976_2262101133893748_8710847301590974464_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=P8fk8O7_R3AAX_G7kwW&_nc_ht=scontent.fsjk1-1.fna&oh=04434269466f71e64557a5a6d9a694d6&oe=5F6BA878',
        'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/65536145_2032903230146874_6609603327334285312_o.jpg?_nc_cat=108&_nc_sid=174925&_nc_ohc=Xby3GBSdgjkAX8-8AYD&_nc_oc=AQkliz_jzf6-c7TrP1-w9wvBh-QMkoS5_xsDMWHeT4aelzi31OqX4dbTuQXsvxO5xSc&_nc_ht=scontent.fsjk1-1.fna&oh=dce9a2336383b2647c890e95145df89f&oe=5F6DBD21',
        
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




