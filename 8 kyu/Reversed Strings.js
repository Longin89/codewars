/*

	Description

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'

'word'   =>  'drow'

*/

//Solution

const solution = (str) => str === '' ? '' : [...str].reduce((a,b) => b + a);