var reverseVowels = function(s) {
    //     let vowels = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true, 'A': true, 'E': true, 'I': true, 'O': true, 'U': true};
    //     let stack = [];
        
    //     for(let i = 0; i < s.length; i++) {
    //         if(s[i] in vowels) {
    //             stack.push(s[i]);
    //         }
    //     }
        
    //     console.log(stack);
        
    //     for(let i = 0; i < s.length; i++) {
    //         let len = s.length - i;
    //         if(s[i] in vowels) {
    //            s = s.substr(0, i) + stack[stack.length - 1] + s.substr(i + 1);
    //            stack.pop();
    //         }
    //     }
        
    //     return s;
        
        let vowels = 'aeiouAEIOU';
        let left = 0;
        let right = s.length - 1;
        let characters = s.split('');
        
        while(left < right) {
            console.log(left,right);
            while(left < right && vowels.indexOf(characters[left]) === -1) {
                left++;
            } 
            while(right > left && vowels.indexOf(characters[right]) === -1) {
                right--;
            }
            
            let temp = characters[right];
            characters[right] = characters[left];
            characters[left] = temp;
            left++;
            right--;
        }
        
        return characters.join('');
};


var reverseVowels = function(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let stack = [];
    
    for(let letter of s) {
        if(vowels.has(letter)) {
            stack.push(letter);
        }
    }
    s = s.split('');
    for(let i = 0; i < s.length; i++) {
        if(vowels.has(s[i])) {
            let replace = stack.pop();
            s[i] = replace;
        }
    }
    
    return s.join('');
};

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

/** 

- store vowels in a data structure (hashmap / array)
- use a stack
- use two pass to populate stack with vowels
- loop through the string again and when a vowel is detected replace with last element from stack

Time Complexity: O(n) depends on how long our string is
Space Complexity: O(n) depends on how many vowels we are adding to our stack

*/