/*

	Description

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/

//Solution

function sumMix(x){
    let res = 0;
    for(i = 0; i < x.length; i++) {
    x[i] === typeof(number) ? res += x[i] : res += parseInt(x[i]);
    }
    return res;
}