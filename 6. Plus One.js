// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

const myArr = [1, 2, 6]

var plusOne = function(digits) {
    // take the last element of the array
    // digits.length // 3
    const lastElement = digits[digits.length - 1] 
    
    // add one to the array
    const added = lastElement + 1 // 6

    // return the new array
    digits.pop()
    digits.push(added)

    return digits
};

console.log(plusOne(myArr))