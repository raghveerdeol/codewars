// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
console.log(alphabetPosition("The sunset sets at twelve o' clock"))

function alphabetPosition(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let textData = text.toUpperCase().charCodeAt(i);
        if (textData > 64 && textData < 91) {
            result += (textData - 64) + " "; 
        }
    }

    return result.slice(0, result.length - 1);
}