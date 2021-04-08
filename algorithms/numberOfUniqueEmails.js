var numUniqueEmails = function(emails) {
    if(emails.length === 1) return 1;
    let copy = [...emails];
    
    copy = copy.map((email) => {
        email = email.split('@');
        email[0] = email[0].split('.').join('');
        let index = email[0].indexOf('+');
        if(index > 0) {
            email[0] = email[0].slice(0, index);
        }
        
        email = email.join('@');
        return email;
    })
    
    let hash = {};
    let count = 0;
    
    for(let email of copy) {
        hash[email] > 0 ? hash[email]++ : hash[email] = 1;
    }
    
    for(let key in hash) {
        count++;
    }
    
    return count; 

    // return Object.keys(hash).length; 
};

/**
 * edge case if we only have 1 email, return 1
 * - create a copy of our emails array
 * - split at the @ sign to get local name(email[0]) + domain name (email[1])
 * - modifiy local name according to rules, detect '.' and replace with space 
 * - if '+' is found, replace element with slice(0, index)
 * - rejoin both pieces
 * - use hash map to retrieve unique emails and loop over hash to count unique emails 
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */