/*
    In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

    High Card: Highest value card.
    One Pair: Two cards of the same value.
    Two Pairs: Two different pairs.
    Three of a Kind: Three cards of the same value.
    Straight: All cards are consecutive values.
    Flush: All cards of the same suit.
    Full House: Three of a kind and a pair.
    Four of a Kind: Four cards of the same value.
    Straight Flush: All cards are consecutive values of same suit.
    Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.

    The cards are valued in the order:
    2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.

    If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.

    Consider the following five hands dealt to two players:

    The file, poker.txt, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.

    How many hands does Player 1 win?
*/

let specialsTranslator = {
    "High Card":0,
    "One Pair":1,
    "Two Pairs":2,
    "Three of a Kind":3,
    "Straight":4,
    "Flush":5,
    "Full House":6,
    "Four of a Kind":7,
    "Straight Flush":8,
    "Royal Flush":9,
    0:"High Card",
    1:"One Pair",
    2:"Two Pairs",
    3:"Three of a Kind",
    4:"Straight",
    5:"Flush",
    6:"Full House",
    7:"Four of a Kind",
    8:"Straight Flush",
    9:"Royal Flush",
}

let hand = {
    specials:{
        id:9,
        remainder:[0, 2],
    },
    cards:[
        {
            value:14,
            suit:2
        },
        {
            value:11,
            suit:2
        },
        {
            value:12,
            suit:2
        },
        {
            value:13,
            suit:2
        },
        {
            value:10,
            suit:2
        },
    ]
}




function game(){
    let player1 = 0;
    for(let i = 0; i < 1000; i++){
        let winningHand = returnWinnerOfTwoHands(hand1, hand2);
        if(winningHand === 0){
            player1++;
        }
    }
}

function returnWinnerOfTwoHands(hand1, hand2){

    if(hand1.specials.id > hand2.specials.id){
        return hand1;
    }
    if(hand1.specials.id < hand2.specials.id){
        return hand2;
    }

    //

    return 0;
}

hand.specials = checkHand(hand);
console.log(hand);

function checkHand(hand){

    hand.cards = hand.cards.sort((a, b) => a.value - b.value);
    
    //private for the function, to keep track of what we should look for and when to return (not what we will actually return);
    let specials = {

    }


    specials.isFlush = (function isFlush(){
        return iterator((i) => {
            if(i === 0){
                return true;
            }
            if(hand.cards[i].suit === hand.cards[i - 1].suit){
                return true;
            }else{
                return false;
            }
        }, hand.cards.length);
    })();

    specials.isStraight = (function isStraight(){
        return iterator((i) => {
            if(i === 0){
                return true;
            }
            if(hand.cards[i].value === (hand.cards[i - 1].value) + 1){
                return true;
            }else{
                return false;
            }
        }, hand.cards.length);
    })();

    //this is why JS is awesome
    if(((function isRoyalFlush(){
        return hand.cards[0].value === 10 && specials.isFlush && specials.isStraight;
    })())){
        return {
            id:specialsTranslator["Royal Flush"]
        };
    }

    if((function isStraightFlush(){
        return specials.isFlush && specials.isStraight;
    })()){
        return {
            id:specialsTranslator["Straight Flush"]
        };
    }


    let obj = {
        equalCards:4,
        remainders:[0, 1, 0]
    }

    let parityCounter = IIFE();
    
    function IIFE(){
        let highest = {
            id:0,
            count:0
        }
        let iterator;
        let current;
        for(let i = 0; i < hand.cards; i++){
            if(hand.cards[i] === current){
                iterator++;
                if(iterator > highest.count){
                    highest.count = iterator;
                    highest.id = current;
                }
            }else{
                iterator = 1;
                current = hand.cards[i];
            }
        }
        highest.remainder = hand.cards.filter(item => item !== highest.id);
        return highest;
    }

    switch(parityCounter.count){
        case 4:
            return {
                id:specialsTranslator["Four of a Kind"]
            };
        break;
        case 3:
            specials.isTreeOfAkind = true;
        break;
        case 2:
            specials.isPair = true;
        break;
    }


    if(specials.isTreeOfAkind && parityCounter.remainder[0] === parityCounter.remainder[1]){
        return {
            id:specialsTranslator["Full House"]
        };
    }

    if(specials.isFlush){
        return {
            id:specialsTranslator["Flush"],
            remainder:parityCounter.remainder
        };
    }

    if(specials.isStraight){
        return {
            id:specialsTranslator["Straight"],
            remainder:parityCounter.remainder
        };
    }

    if(specials.isTreeOfAkind){
        return {
            id:specialsTranslator["Three of a Kind"]
        };
    }



    //two pair
    if(specials.isPair){

        if(parityCounter.remainder[0] === parityCounter.remainder[1] || parityCounter.remainder[1] === parityCounter.remainder[2] || parityCounter.remainder[0] === parityCounter.remainder[3]){
            return {
                id:specialsTranslator["Two Pairs"],
                remainder:parityCounter.remainder
            };
        }

        return {
            id:specialsTranslator["One Pair"],
            remainder:parityCounter.remainder
        };
    }



    

















    function iterator(func, index){
        for(let i = 0; i < index; i++){
            if(!func(i)){
                return false;
            }
        }
        return true;
    }

    
}
