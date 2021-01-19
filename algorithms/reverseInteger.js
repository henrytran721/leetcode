/**
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */

var reverse = function(x) {
    if(x < 0) {
        x = parseInt(x.toString().split('').slice(1).reverse().join('')) * -1;
        // return if within boundary
        return x > Math.pow(-2, 31) ? x : 0;
    } else {
         x = parseInt(x.toString().split('').reverse().join(''))
         // return if within boundary
        return x < (Math.pow(2, 31) - 1) ? x : 0;
    }
};

/**
 * Big O 
 * Runtime: Olog(n) based on how many digits the number has
 * Space: O(1), we didn't create any data structures to store values
 */