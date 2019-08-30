// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // so find the smallest integer that is not inside the array
    // loop through array, do i need to sort? does sort make it better?
    // sort if repetitive how? if negative how?
    // let boolArray = [];
    let x = 1;
    let max = 0;
    // for (let i =0; i<A; i++) {
    //     boolArray[i]= false;
    // }
    
    let arr = A.sort(function(a, b) {
        return (a - b);
    }); 
    arr = [...new Set(arr)];
    // console.log(arr)
    for (let i =0 ; i<arr.length;i++) {
        // console.log(arr[i],x);
        if (arr[i]===x) {
            x++;
            if (x>max) {
                max = x;
            }
        } 
    }
    
    return x;  
}

// alternate solution
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sortA = A.sort(function(a, b){return a-b});
    // console.log("sortA " + sortA);
    let numArr = {};
    let len = A.length;
    let sum = 0;
    let actualSum = 0;
    let counter = 1;
    for (let i =0 ; i < len; i++) {
        if (sortA[i] > 0 && numArr[sortA[i]]===undefined) {
            numArr[sortA[i]] = sortA[i];
            sum += sortA[i];
            // console.log("sum " +sum);
            actualSum += counter;
            // console.log("actual sum " +actualSum);            
            if (sum!== actualSum) {
                return counter;
            }
            counter++;
        }
        
    }

return counter;   
}
