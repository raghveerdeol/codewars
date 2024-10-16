// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

console.log(getMiddle('middle'))
function getMiddle(s)
{
    let arrayS = s.trim().split('');
    i = 0;
    if (arrayS.length % 2 === 0) {
        return arrayS[(arrayS.length / 2) - 1] + arrayS[(arrayS.length / 2)]; 
    } else {
        return arrayS[parseInt(arrayS.length / 2)];
    }
}