// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = []
  
    for(let parentheses of s) {
        // edge case, if not divisible by 2 then return false
        if(s.length % 2 !== 0) return false;

        // if you see a openinng parentheses add it to the stack
        // if you see a closing parentheses and last element in the stack is it's opening parentheses pop from stack
        // else(you see a closing bracket with no opening bracket) return false
        if(parentheses === '(' || parentheses === '[' || parentheses === '{') {
        stack.push(parentheses);
        } else if (parentheses === ')' && stack[stack.length - 1] == '(') {
        stack.pop();
        } else if(parentheses === ']' && stack[stack.length - 1] == '[') {
        stack.pop();
        } else if(parentheses === '}' && stack[stack.length - 1] == '{') {
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