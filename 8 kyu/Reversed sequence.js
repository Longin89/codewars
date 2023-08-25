/*

	Description

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

//Solution

const reverseSeq = n => {
  let res = [];
  for(let i = 1; i <= n; i++) {
    res[i-1] = i;
}
  return res.reverse();
  }