/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4 */



var search = function(nums, target) {
    //this is the basic iterative search as we eleminate the the array from both sides like touring maching with two strings one point to the end and one to the start 
    //once the machine found the element it stops and return the index if the two pointers point to the same element and not found the target it stops
    // and if the middle pointer is bigger or smaller we move one of the pointer to the one before or one after accordingly
    let start = 0; 
    let end = nums.length - 1;
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
  }
    
    return -1
};


let nums = [-1,0,3,5,9,12], target = 9
console.log(search(nums ,target))