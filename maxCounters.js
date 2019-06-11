// You are given N counters, initially set to 0, and you have two possible operations on them:

// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// For example, given integer N = 5 and array A such that:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the values of the counters after each consecutive operation will be:

//     (0, 0, 1, 0, 0)
//     (0, 0, 1, 1, 0)
//     (0, 0, 1, 2, 0)
//     (2, 2, 2, 2, 2)
//     (3, 2, 2, 2, 2)
//     (3, 2, 2, 3, 2)
//     (3, 2, 2, 4, 2)
// The goal is to calculate the value of every counter after all operations.

// Write a function:

// function solution(N, A);

// that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

// Result array should be returned as an array of integers.

// For example, given:

//     A[0] = 3
//     A[1] = 4
//     A[2] = 4
//     A[3] = 6
//     A[4] = 1
//     A[5] = 4
//     A[6] = 4
// the function should return [3, 2, 2, 4, 2], as explained above.

// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// each element of array A is an integer within the range [1..N + 1].

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// if 1<k<N, 
// increment by 1
// else, if k = N+1, 
// then if not incremented, add the rest to be the max.
// all becomes the max.
// so to become the max, have to find the max value first
// and after u have the max, how to update the values?
// he updated by separating them.

// so while the loop is going, add the max on top of the increment

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // to avoid nested loops. 
    // first 
    let returnArray = new Array(N).fill(0);
    let maxN=0;
    let max = 0;
    for(let i = 0; i<A.length; i++) {
        if(returnArray[A[i]-1]<maxN) {
            returnArray[A[i]-1] = maxN;
        }
        // console.log(returnArray)
        if(A[i]<=N && A[i]>0) {
            returnArray[A[i]-1] +=1;
            if(returnArray[A[i]-1] > max) {
                max= returnArray[A[i]-1];
            }
        } else if (A[i]===N+1) {
            maxN = max;
            // for (let i=0;i<N;i++) {
            //     returnArray[i]=maxN;
            // }
        } else {
            return A;
        }
    }
    
    for(let i = 0; i<N; i++) {
        // console.log(returnArray)
        if (returnArray[i]<maxN) {
            returnArray[i] = maxN;
        }
        
    }

    
    return returnArray;
}