/*

	Description

Messi goals function

Messi is a soccer player with goals in three leagues:

LaLiga

Copa del Rey

Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17

*/

//Solution

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let arr = [laLigaGoals, copaDelReyGoals, championsLeagueGoals]
  let result = arr.reduce((acc, curval) => acc += curval, 0);
  return result;
}