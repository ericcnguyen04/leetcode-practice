// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard 
// iow, only display words that use the middle of the keyboard

// make an array of invalid characters
const invalid = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

// loop through script
const script = 'glad'

// if word had invalid characters, return invalid
const validation = (word, condition) => {
    const error = 0

    for (let i = 0; i < word.length; i++) {
        // console.log(word[i]) // this will print each letter of the word
        
        for (let j = 0; j < condition.length; j++) {
            // console.log(condition[j]) // this will print out each invalid letter

            if (word[i] == condition[j]) {
                console.log('true')
                error += 1
            } else {
                console.log('false')
            }
        }
    }
    console.log(error)
}

// return validation
validation(script, invalid)