/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0 ; i < nums.length; i++){
        let a = nums[i]
        console.log(`element${i} =  ${a}`)
        for(var j = 1 + i ; j < nums.length; j++){
            var sum = a + nums[j]
            console.log(`sum${i}${j} =  ${sum}`)
            if(sum == target) {return [i,j]}
        }
    }
};
const nums = [2,5,5,11]
const target = 10
console.log(twoSum(nums, target))

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

//Best
// var twoSum = function(nums, target) {
//     let prevElements = {};
//     for(let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i];
//         if (prevElements.hasOwnProperty(diff)) return [prevElements[diff],i]
//         prevElements[nums[i]] = i;
//     }
// };
