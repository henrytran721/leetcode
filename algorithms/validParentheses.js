/**
 * 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

var isValid = function(s) {
    let map = {'}': '{', ']':'[', ')':'('};
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        // if curr index is an opening tag, push to our stack
        if(s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stack.push(s[i]);
            // if it is an ending tag, check to see if the last thing added to our stack is a corresponding opening tag
        } else if(stack[stack.length - 1] === map[s[i]]) {
            stack.pop();
            // if it doesn't match, return false because we have unmatched tags
        } else {
            return false;
        }
    }
    // make sure our stack is empty, which makes sure each opening has a closing
    return !stack.length ? true : false;
};

/**
 * Big O
 * Time: O(n) time is based on how long the insertion string is
 * Space: O(n), worst case we have insertion of a lot opening brackets (((((((
 */