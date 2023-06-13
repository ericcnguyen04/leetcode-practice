// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard 
// iow, only display words that use the middle of the keyboard

// make an array of invalid characters
const invalid = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

// loop through script
const script = 'glad'

// if word had invalid characters, return invalid
const validation = (word, condition) => {
    for (let i = 0; i < word.length; i++) {
        console.log(word)
    }
}

// return validation
validation(script)