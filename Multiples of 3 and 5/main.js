/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/


//returns the sum of the numbers between "min" and "max", that are multiples of "multiples"
function sumOfMultiples(max, multiples, min = 1){
    let sum = 0;
    for(let i = min; i < max; i++){
        if(isMultiple(i, multiples)){
            sum += i;
        }
    }
    return sum;
}

//returns true if "n" is a multiple of any given number in "mulitples"
function isMultiple(n, multiples){
    for(let i = 0; i < multiples.length; i++){
        if((n % multiples[i]) === 0){
            return true;
        }
    }
    return false;
}

console.log(sumOfMultiples(1000, [3, 5], 0));