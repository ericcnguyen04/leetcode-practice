// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

numsArray = []

var twoSum = function (nums, target) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashTable[target - nums[i]] != undefined) {
            return [hashTable[target - nums[i]], i];
        }
        hashTable[nums[i]] = i;
    }
}

twoSum()