/**
 * Given a non-negative integer x, compute and return the square root of x.

   Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 */

var mySqrt = function(x) {
    var start = 0;
    var end = x;
    
    while(start <= end) {
        var mid = Math.floor((start + end)/2);
        console.log(start, mid, end);
        if(mid ** 2 === x) {
            return mid;
        } else if(mid ** 2 > x) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return end;
};

/** s       m       e
 *  0 1 2 3 4 5 6 7 8
 *  mid ** 2 > x move end = mid - 1
 *  
 *  s m   e
 *  0 1 2 3
 *  mid ** 2 < x move start = mid + 1
 *  
 *  m
 *  s e
 *  2 3
 *  mid ** 2 < x move start = mid + 1
 * 
 *    s
 *    m 
 *  e 
 *  2 3
 * 
 * // end goes to smaller value when between two numbers because start <= end is still true
 * 
 * Big O
 * Time O(log n) because we are using binary search to divide the search every iteration
 * Space: O(1) we do not allocate any additional memory
 */

 mySqrt(8);