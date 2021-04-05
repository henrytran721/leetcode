/**
 * Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

    Input: n = 19
    Output: true
    Explanation:
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1
 */

 var happyNumber = function(n) {
    if(n === 1) return true;
    let set = new Set();
    set.add(n);
    
    while(true) {
        n = n.toString().split('')
            .map((num) => parseInt(num))
            .reduce((total, val) => {
            return total + val ** 2
        }, 0)
        console.log(n);
        
        if(n === 1) {
            return true;
        } else if(set.has(n)) {
            return false;
        } else {
            set.add(n);
        }
    }
 }

 console.log(happyNumber(19));

 