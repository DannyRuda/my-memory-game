// what values should be stored and handled in state

// score ? can be computed from number of card objects with clicked === true property  so no state
// highscore ? can be fetched from localstorage and reevaluated and saved on localstorage on game over or game won  so no state
// array with card objects ? objects in the array change over time, cant be computed from anything else, definitely state


// How do we randomise the shown cards
    // we need to build an array in which we push all card objects that should be displayed next round.
        // array needs to contain at least one unclicked card
        // array needs to contain exactly 8 cards
        // array needs to order card objects randomly
    
    const cardArray = [];
    for(let i = 0; i<12; i++) {
        const card = {clicked: false};
        cardArray.push(card);
    }

    function randomisedArray(arr) {
        const randArr = [];
        const clickedCards = randArr.filter((card)=>{return card.clicked});
        const unclickedCards = randArr.filter((card)=>{return !card.clicked});
        const cardsOrdered = [];

        let numOfUnclickedCards = 0;
        if(clickedCards.length < 1) {
            numOfUnclickedCards = 8;
        } else {
            const rand = 
            numOfUnclickedCards = Math.floor(Math.random()*clickedCards.length + 1)
        }
        

        return randArr 
    }


    console.log(randomisedArray(cardArray));
    // then just map over array creating Card component with each object in array
