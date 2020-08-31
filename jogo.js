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
        'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/49121008_1769326689837864_2158699912143831040_n.jpg?_nc_cat=103&_nc_sid=174925&_nc_ohc=R56qPESiLL0AX9A0ZO8&_nc_ht=scontent.fsjk1-1.fna&oh=5128e67e5d4f1f0ccfa348c3b6e66da9&oe=5F6B8DEB',
        'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/33784209_1473824806054722_4584604183746838528_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=p2MrYAkZ9UEAX-swOxn&_nc_ht=scontent.fsjk1-1.fna&oh=4782e57443781fb62352fa8b860c2dcb&oe=5F6AC4F9',
        'https://scontent.fsjk1-1.fna.fbcdn.net/v/t31.0-8/21740833_1238674609569744_6813150822578385584_o.jpg?_nc_cat=110&_nc_sid=174925&_nc_ohc=4yCFgiUavGsAX93no3O&_nc_ht=scontent.fsjk1-1.fna&oh=de872337544de594c70274597ba9054d&oe=5F6E1CE8',
        'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/18119570_1122458254524714_982734948122359020_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=DfrVfPKrTmUAX_-ewe5&_nc_ht=scontent.fsjk1-1.fna&oh=3c16f3c92279f1b3a727970224a8b763&oe=5F6D8E8A',
        'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/15822880_1013974808706393_8848387260020749005_n.jpg?_nc_cat=103&_nc_sid=174925&_nc_ohc=yreCxKzB4XUAX9dVH-C&_nc_ht=scontent.fsjk1-1.fna&oh=653bf0a0294a4bb25fe595db70d1afd6&oe=5F6D46E1',
        'https://scontent.fsjk1-1.fna.fbcdn.net/v/t1.0-9/13912413_885070311596844_6200487751636775276_n.jpg?_nc_cat=105&_nc_sid=174925&_nc_ohc=EB9Iug8XGCYAX8GOlpL&_nc_ht=scontent.fsjk1-1.fna&oh=9956cb5f422ea7ef0853d959592a445b&oe=5F6CB05F',
        'https://lh3.googleusercontent.com/las3lm3mFinped95p-UjVz8BEy-CC_CohxrAdVETjH3JBi4a3ieS7SrNRomba4Jn7sONlRYxfVJ92he3wBAyZQksba8nsfZlqH6fxuPfHhH20YAvFf5qu9hEkjFZxX4VH_WMX_kv5hGpAdDmyw6vu-FjxEKABDjLbgqTFerxDIb9j4N1uYuPnsSjs8Vivng3Mv0Y230mDSg2ef4FQSXfglsBdQmSnSzRt68lbYJ3-aU1e6ohGg5FPVXP-kH--32h4QA4FVs_XzHWqAVk0W768tFT9rPx7Juhe-S__5Uls5GmwwY1We6HSWKf0fChcec18xy95g4sc_ZgaMlgtfcQCeq3gewzMwY8XyDvQXyPu8ocPL2MqH70Bewwa3OWXVVzxpVhZ1VnNSTCKFrJRgIWYnomeD5nrravhCjgVjfSKc27pzhZB0Vxjsb9PpKV7AZx-uHSVoAj6J2S9t7uMse6SSF36db9AJMLuulcjGe4A-BQzgWjeYqQFCni8rbsu778x2xXcMJuuZuLZpJPiWGlpnXWY1wkLWJGHe4-xwyNdWemqF8J_rNwUqTXcHzpN8lybFOMdjrzqzU7ftueb4su5by6wUueeTjQh6PvIDW3_FFsFpV911t7sf1lg8B8pkeOv1lYXC2iaHqEbOUgSybHRdhbuHEfDzHl1vGNYWrBhRIgYj_wuH6l7bCvrLBvoA=s664-no?authuser=0',
        
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




