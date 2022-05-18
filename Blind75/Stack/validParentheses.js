// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
  
    for(let parentheses of s) {
      if(s.length % 2 !== 0) return false;
  
      if(parentheses === '(' || parentheses === '[' || parentheses === '{') {
        stack.push(parentheses);
      } else if (parentheses === ')' && stack.length !== 0 && stack[stack.length - 1] == '(') {
        stack.pop();
      } else if(parentheses === ']' && stack.length !== 0 && stack[stack.length - 1] == '[') {
        stack.pop();
      } else if(parentheses === '}' && stack.length !== 0 && stack[stack.length - 1] == '{') {
        stack.pop();
      } else {
         return false;
      } 
    }
    return stack.length === 0
  };

// *******TESTING************
console.log(isValid("([])"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("([)]"));
console.log(isValid("(]"));