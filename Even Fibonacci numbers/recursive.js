


console.log(FibonacciRecursive(10));

function FibonacciRecursive(n, curr = 2, arr = [0,  1]){
    if(n === curr){
        return arr;
    }
    arr[curr] = arr[curr - 2] + arr[curr - 1];
    return FibonacciRecursive(n, ++curr, arr);
}