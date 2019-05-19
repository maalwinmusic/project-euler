/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

//retruns the largest prime factor of N
function largestPrimeFactor(n){
    if(n > 1){    
        for(let i = 1; i <= n / 2; i++){
            if(n % i === 0){
                if(isPrime(n / i)){
                    return n / i;
                }
            }
        }
    }
    return n === 1 ? 1 : 0;
}

//returns true if N is a prime
function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){    
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

//console.log(largestPrimeFactor(600851475143));

let number = 0;

function hi() {
    for(let i = 999; i >= 100; i--){
        for(let j = 999; j >= 100; j--){
            let s = (i*j).toString();
            let array = s.split("");
            array.reverse();
            let revesedS = array.toString().replace(/,/g, "");
            if(revesedS === s){
                if((i*j) > number){
                    number = i*j;
                }
                break;
            }
        }
    }

    return number;
    
}

console.log(hi());

