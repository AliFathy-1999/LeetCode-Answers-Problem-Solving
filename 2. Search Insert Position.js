/*
    Given a sorted array of distinct integers and a target value, return the index if the target is found.
    If not, return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

*/
/*
//First Try
var searchInsert = function(nums, target) {
    let numberIndex = nums.indexOf(target)
    if(numberIndex !== -1){
        return numberIndex
    }else{
        nums.push(target);
        const sortedArray = nums.sort((a, b)=> a-b )
        return sortedArray.indexOf(target)
    }
}
*/
// Binary search algorithm
// 1. target in the middle of the array
// 2. target in the left of the middle of the array
// 2. target in the right of the middle of the array
var searchInsert = function(nums, target) {
    let minIndex = 0, maxIndex = nums.length - 1;
    let midIndex = undefined;
    while (minIndex <= maxIndex){
        midIndex = Math.floor((minIndex + maxIndex) / 2); 
        if(nums[midIndex] === target)  
            return midIndex;
        else if(nums[midIndex] < target) 
            minIndex = midIndex + 1;
        else 
            maxIndex = midIndex - 1;
    }
    return minIndex;
};

console.log(searchInsert([3,5,7,9,10,11],8))
