interface Dish {
    image: string;
    title: string;
    color: string;
    shadowColor: string;
    clicked: boolean;
  }

export default function shuffleCards(arr:Array<Dish>) {
    const randArr = [];
    const clickedCards = arr.filter((card)=>{return card.clicked});
    const unclickedCards = arr.filter((card)=>{return !card.clicked});
    const cardsOrdered = [];


    let numOfUnclickedCards = 0;
     
    if(clickedCards.length < 1) {
        numOfUnclickedCards = 8;
    } else {
        const unclickedRatio =  unclickedCards.length / arr.length ;
        numOfUnclickedCards = Math.round(unclickedRatio * 8);
    }

    console.log(numOfUnclickedCards)

    const numOfClickedCards = 8 - numOfUnclickedCards;
    console.log(numOfClickedCards);
    let maxRandNum = unclickedCards.length;
    console.log("maxrandom",maxRandNum)
    for(let i = 0; i < numOfUnclickedCards ; i++) {
        const randNum = Math.floor(Math.random()*maxRandNum )
        console.log(randNum)
        cardsOrdered.push(unclickedCards.splice(randNum,1)[0]);
        maxRandNum--;
    }

    maxRandNum = clickedCards.length;

    for(let i = 0; i < numOfClickedCards ; i++) {
        const randNum = Math.floor(Math.random()*maxRandNum )
        cardsOrdered.push(clickedCards.splice(randNum,1)[0]);
        maxRandNum--;
    }

    maxRandNum = 8;

    for(let i = 0; i < 8; i++) {
        const randNum = Math.floor(Math.random()*maxRandNum )
        randArr.push(cardsOrdered.splice(randNum,1)[0]);
        maxRandNum--;
    }

    return randArr 
}