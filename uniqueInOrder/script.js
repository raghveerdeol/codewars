// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.


console.log(uniqueInOrder('AAAABBBCCDAABBB'));
function uniqueInOrder (iterable){
    //your code here - remember iterable can be a string or an array
    let array = [];
    if (Array.isArray(iterable)) {
        array = iterable;
    }else {
        array = iterable.split("");
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i - 1]) {
            newArray.push(array[i]);
        }
    }
    return newArray;

}