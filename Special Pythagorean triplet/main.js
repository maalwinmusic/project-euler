/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

//returns the product of the pt's a+b+c sum
function product(sum) {

    //the minimum value of A
    let aMin = 1;

    //the minimum value of B
    let bMin = 2;

    //the minmum value of C
    let cMin = 0;
    if(isMultiple(sum, [3])){
        cMin = sum / 3 + 1;
    }else{
        if(isMultiple(sum - 1, [3])){
            cMin = (sum - 1) / 3 + 2;
        }else{
            cMin = (sum - 2) / 3 + 1;
        }
    }

    //the maxium value of A
    let aMax = 0;
    if(isMultiple(sum, [3])){
        aMax = sum / 3 - 1;
    }else{
        if(isMultiple(sum - 1, [3])){
            aMax = (sum - 1) / 3 - 2;
        }else{
            aMax = (sum - 2) / 3 - 1;
        }
    }

    //the maximum value of B
    let bMax = 0;
    if(sum % 2 === 0){
        bMax = sum / 2 - 1;
    }else{
        bMax = (sum - 1) / 2;
    }

    //the maximum value of C
    let cMax = sum - 3;

    for(let x = aMin; x < aMax; x++){
        for(let y = bMin; y < bMax; y++){
            for(let z = cMin; z < cMax; z++){
                if(x + y + z === sum && (x * x + y * y) === (z * z)){
                    return x * y * z;
                }
            }
        }
    }
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

console.log(product(1000));