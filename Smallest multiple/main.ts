/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function returnSmallesPositiveNumber(settings: Settings): number{
    if(!settings.endIndex){
        settings.endIndex = Number.MAX_VALUE;
    }
    for(let i = settings.endNumber + 1; i <= settings.endIndex; i++){
        for(let j = settings.startNumber; j <= settings.endNumber; j++){
            if(i % j !== 0){
                break;
            }
            if(j === settings.endNumber){
                return i;
            }
        }
    }
}

interface Settings{
    startNumber: number;
    endNumber: number;
    endIndex?: number;
}

let myObj = {startNumber: 1, endNumber: 20};

console.log(returnSmallesPositiveNumber(myObj));