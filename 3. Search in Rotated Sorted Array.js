/*
    There is an integer array nums sorted in ascending order (with distinct values).

    Prior to being passed to your function,
    nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
    For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

    Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

    You must write an algorithm with O(log n) runtime complexity.
*/

var search = function (nums, target) {
  let minIndex = 0,
    maxIndex = nums.length - 1,
    midIndex = undefined;

  while (minIndex <= maxIndex) {
    midIndex = Math.floor((minIndex + maxIndex) / 2);
    if (nums[midIndex] === target) 
        return midIndex;

    if(nums[minIndex] <= nums[midIndex]){
        if(nums[minIndex] <= target && target < nums[midIndex]){
            maxIndex = midIndex - 1;
        }
        else{
            minIndex = midIndex + 1;
        }
    }else{
        if(nums[midIndex] < target && target <= nums[maxIndex]){
            minIndex = midIndex + 1;
        }
        else {
            maxIndex = midIndex - 1;
        }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

