/*

	Description

Complete the square sum function so that it squares each number passed into it and then sums the results together.

*/

//Solution

function squareSum(numbers){
if(numbers) {
 return numbers.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);   
}
   else
    return 0;
}