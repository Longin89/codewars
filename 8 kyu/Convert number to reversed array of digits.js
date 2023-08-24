/*

	Description

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/

//Solution

function digitize(n) {
  let arr = String(n).split('').reverse();
  let res = arr.map(function(num) {
    return parseInt(num);
    });
    return res;
}