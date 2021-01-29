// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * Add into hash map the sorted version of each string (this is O(n log n) time)
 * loop through the original strings and sort each string, see if sorted string is in the map and push to the array in the map
 * loop through hash map and push to a results array
 */

var groupAnagrams = function(strs) {
    const copy = [...strs];
    let result = [];
    let hash = {};
    
    for(let i = 0; i < copy.length; i++) {
        let temp = copy[i].split('').sort().join('');
        hash[temp] = [];
    }
    
    for(let i = 0; i < strs.length; i++) {
        const sorted = strs[i].split('').sort().join('');
        if(sorted in hash) {
            hash[sorted].push(strs[i]);
        }
    }
    
    for(let key in hash) {
        result.push(hash[key]);
    }
    
    return result;
};

/**
 * Time Complexity: O(N K log K) iterate through strings and sort them
 * Space Complexity: O(n) because we're filling up the hash map with data
 */