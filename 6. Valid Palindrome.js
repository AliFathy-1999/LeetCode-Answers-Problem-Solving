/*
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
    Alphanumeric characters include letters and numbers.

    Given a string s, return true if it is a palindrome, or false otherwise.
*/

var isPalindrome = function(s) {
    const reversedStr = s.toLowerCase().replace(/[^a-z0-9]/gi, '').split('').reverse().join('')
    return s.toLowerCase().replace(/[^a-z0-9]/gi, '') === reversedStr
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));