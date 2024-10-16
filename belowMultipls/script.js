
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

console.log(solution(14));

function solution(number) {
    let multipleOf3 = [];
    let multipleOf5 = [];
    let multipleSum = 0;
    if (number <= 0) {
        return multipleSum = 0;
    } else {
        for (let i = 0; i * 3 < number; i++ ) {
            multipleOf3.push(i*3);
        };
        for (let i = 0; i * 5 < number; i++ ) {
            multipleOf5.push(i*5);
        };
        let multipleAll = [...new Set([...multipleOf3, ...multipleOf5])];

        for (let i = 0; i < multipleAll.length; i++) {
            multipleSum = multipleSum + multipleAll[i];
        }
        return multipleSum;
    };
};