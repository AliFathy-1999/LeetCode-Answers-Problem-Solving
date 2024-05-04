/**
    - Write a function to find the longest common prefix string amongst an array of strings.

    - If there is no common prefix, return an empty string "".
    - Easy level
 */
/*
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
*/
/*
    Input: strs = ["dog","racecar","car"]
    Output: ""
*/
//  Time Complexity: O(n * m) 
//  Space Complexity: O(n)

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if(strs[0].length === 0) return "";
    let commonPrefix = strs[0];
    for(let i = 1; i < strs.length; i++){
        let j = 0;

        while (j < commonPrefix.length && j < strs[i].length && commonPrefix[j] === strs[i][j]) {
            j++;
        }
        commonPrefix = commonPrefix.substring(0, j);
        if (commonPrefix === "") break;
    }
    return commonPrefix;
};
console.log('longestCommonPrefix-1:', longestCommonPrefix(["flower","flow","flight"]))
console.log('longestCommonPrefix-2:', longestCommonPrefix(["flower","flower","flower","flower"]))
console.log('longestCommonPrefix-3:', longestCommonPrefix(["","",""]))
console.log('longestCommonPrefix-4:', longestCommonPrefix(["dog","racecar","car"]))
console.log('longestCommonPrefix-5:', longestCommonPrefix(["cir","car"]))


