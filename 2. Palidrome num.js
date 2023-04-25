// Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


// control variable - testing to see if the number is a palidrome
const theNumber = 123

const isPalidrome = (num) => {
    const order = []
    // const length = num.length

    for (let i = 0; i < (num.toString().length); i++) {
        order.push(num)
    }
    console.log('the length is ' + num.length)    



    return order
}



console.log(isPalidrome(theNumber))


// number = 34563
// console.log('eyyeyeye  ' + number.toString().length)