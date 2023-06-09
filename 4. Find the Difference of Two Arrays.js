/*
    Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

    answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
    answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

    Note that the integers in the lists may be returned in any order.
    Input: nums1 = [1,2,3], nums2 = [2,4,6]
    Output: [[1,3],[4,6]]
*/

var findDifference = function(nums1, nums2) {
    const uniqueNum1 = new Set(nums1);
    const uniqueNum2 = new Set(nums2);
    const notIntersected1 = [...uniqueNum1].filter(num => !uniqueNum2.has(num))
    const notIntersected2 = [...uniqueNum2].filter(num => !uniqueNum1.has(num))
    return [notIntersected1, notIntersected2]
};

const nums1 =  [1,2,3,3]
const nums2 =  [1,1,2,2]

console.log(findDifference(nums1, nums2))

