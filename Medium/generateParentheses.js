/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    let num=n
 function backtrack(str, left, right) {
   if (left === 0 && right === 0) {
    console.log(str)
     result.push(str);
     return;
   }

   if (left > 0) {
     backtrack(str + '(', left - 1, right);
   }

   if (right > left) {
     backtrack(str + ')', left, right - 1);
   }
 }

 backtrack('', num, num);
 return result
};


console.log( generateParenthesis(3))