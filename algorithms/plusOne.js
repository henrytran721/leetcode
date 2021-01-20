// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        digits[i] = (digits[i] + 1) % 10;
        if(digits[i]) {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};