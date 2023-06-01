// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation 
// marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
    let strArr = str.split(" ")
    return strArr.map((word => word.match(/[a-zA-z]/) ? word.slice(1) + word[0] + "ay" : word)).join(" ")
}

pigIt('Pig latin is cool')