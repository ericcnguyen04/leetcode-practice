// Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


const num = 123

const isPalidrome = (num) => {
    const order = []
    const length = num.length

    for (let i = 0; i < length; i++) {
        order.push(i)
    }

    return order
}

isPalidrome()