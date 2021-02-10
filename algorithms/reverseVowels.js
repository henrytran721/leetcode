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