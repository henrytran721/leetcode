// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

var sortArrayByParity = function(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArr.unshift(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
};

// O(n) time O(n) space


var sortArrayByParity = function(arr) {
    for(let i = arr.length; i >= 0; i--) {
        if(arr[i] % 2 !== 0) {
            arr.push(arr[i]);
            arr.splice(i, 1);
        }
    }
   
    return arr;
};

// remove in place, uses O(n) time but O(1) space