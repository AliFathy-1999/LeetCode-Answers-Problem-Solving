/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
*/
const testCase1_array = [11,15,2,7]; 
const testCase1_target = 9;

const testCase2_array = [3,2,4]; 
const testCase2_target = 6;
// Solution 1
var twoSum = function(nums, target) {
    let twoSumArray = [];
    for(let i=0; i<nums.length; i++) {
        for(let j= i+1; j<nums.length; j++)
        if(nums[i] + nums[j] === target && i!=j){
            twoSumArray.push(i,j);
        }
    }
    return twoSumArray
};
// Solution 2
var twoSum = function(nums, target) {
    const numIndexMap = new Map(); 
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        // Check if the complement exists in the hash map
        if (numIndexMap.hasOwnProperty(complement)) {
            return [numIndexMap[complement], i];
        }
        // If not, add the current element and its index to the hash map
        numIndexMap[nums[i]] = i;
    }
    
    return []; 
};
console.log(twoSum(testCase1_array,testCase1_target));