/**
 * 
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
 */

var isPalindrome = function(x) {
    if(x < 0) return false;
    var copy = parseInt(x.toString().split('').reverse().join(''));
    return copy === x;
};