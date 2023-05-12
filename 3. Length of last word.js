// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const string = "ta da! This is my final word!"

const lastWord = (str) => {
    // take the string and separate by spaces
    const stringData = str.split(' ')
    console.log(stringData)

    // access the final word
    const lastWord = stringData[stringData.length -1]

    // return the final word and it's length
    return console.log(`Your word is ${lastWord} and it is ${lastWord.length} characters long!`)
}

lastWord(string)

// completed!