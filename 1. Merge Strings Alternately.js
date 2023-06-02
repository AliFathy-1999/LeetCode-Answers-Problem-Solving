/*
    word1:  a   b   c
    word2:    p   q   r
    merged: a p b q c r
*/
var mergeAlternately = function(word1, word2) {
    const maxLength = Math.max(word1.length, word2.length)
    let result = ""
    for(let i = 0; i< maxLength ; i++) {
        result += word1[i] !== undefined ? word1[i] : ""
        result += word2[i] !== undefined ? word2[i] : ""
    }
    return result
};
console.log(mergeAlternately('abc','pqr'));