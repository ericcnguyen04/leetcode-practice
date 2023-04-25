// Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


// control variable - testing to see if the number is a palidrome
const theNumber = 123

const isPalidrome = (num) => {
    // get the origional number in an array
    const dataNum = num.toString().split('')
    console.log('the origional num is ' + dataNum)


    // second variable - reversed array
    const reverseNum = dataNum.reverse()
    console.log('the reverse num is ' + reverseNum)

    // compare the origional number and return true or false
    if (dataNum === reverseNum) {
        return true
    } else {
        return false
    }
}



console.log(isPalidrome(theNumber))


// number = 34563
// console.log('eyyeyeye  ' + number.toString().length)