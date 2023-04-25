// Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


// control variable - testing to see if the number is a palidrome
const theNumber = 1211

const isPalidrome = (num) => {
    // get the origional number in an array
    console.log('the origional num is ' + num) // theNumber
    
    
    // second variable - reversed array
    const dataNum = num.toString().split('')
    const reverseNum = dataNum.reverse()
    console.log('the reverse num is ' + reverseNum.join(''))
    reverseData = reverseNum.join('')

    // compare the origional number and return true or false
    if (num === parseInt(reverseData)) {
        return true
    } else {
        return false
    }
}


console.log(isPalidrome(theNumber))


