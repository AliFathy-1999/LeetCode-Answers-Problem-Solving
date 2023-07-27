/*
    Given a string s consisting of words and spaces, return the length of the last word in the string.

    A word is a maximal substring consisting of non-space characters only.
*/

// Time Complexity : O(n)

var lengthOfLastWord = function(s) {
    s = s.trim();
    if (s.length === 0) 
        return 0;
    let lastWordStart = s.lastIndexOf(' ') + 1;
    return s.length - lastWordStart
};

console.log(lengthOfLastWord("luffy is still joyboy"))