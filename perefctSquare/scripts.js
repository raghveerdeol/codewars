// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
console.log(findNextSquare(144))
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Math.sqrt(sq) === parseInt(Math.sqrt(sq)) ) {
        return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
    }
    return -1;
}