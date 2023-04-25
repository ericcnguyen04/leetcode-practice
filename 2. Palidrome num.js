// Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


// control variable - testing to see if the number is a palidrome
const theNumber = 123

const isPalidrome = (num) => {
    // get the origional number in an array
    const dataNum = num.toString().split('')
    console.log('the origional num is ' + dataNum.join(''))


    // second variable - reversed array
    const reverseNum = dataNum.reverse()
    console.log('the reverse num is ' + reverseNum.join(''))

    // compare the origional number and return true or false
    if (dataNum.join('') === reverseNum.join('')) {
        return true
    } else {
        return false
    }
}


isPalidrome(theNumber)


