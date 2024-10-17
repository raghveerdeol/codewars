// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.


console.log(countBit(10));
function countBit(n) {   
    let binary = [];
    while (n != 0) {
        if ((n / 2) === Math.floor(n / 2)) {
            n = Math.floor(n / 2);
            binary.push(0);
        } else {
            n = Math.floor(n / 2);
            binary.push(1);
        }
    }
    bit = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === 1) {
            bit = bit + 1;
        }
    }
    return Math.floor(bit);
};
