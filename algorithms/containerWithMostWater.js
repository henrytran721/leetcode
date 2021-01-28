// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the
//  line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * Use index distance as width with two pointer method
 * Find min of height between two pointers 
 * area = (end - start) * min; 
 */

var maxArea = function(height) {
    var start = 0;
    var end = height.length - 1;
    let currMax = 0;
    
    while(start < end) {
        let min = Math.min(height[start], height[end]);
        currMax = Math.max(currMax, (end - start) * min);
        if(height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    
    return currMax;
};

/**
 *  Time Complexity: O(n)
 *  Space Complexity: O(1)
 * 
 */