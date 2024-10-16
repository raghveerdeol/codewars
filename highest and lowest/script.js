// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

console.log(highAndLow(['8',  '3', '-5', '42',
    '-1', '0', '0',  '-9',
    '4',  '7', '4',  '-4']));
function highAndLow(numbers){
    let array = [];
    if (Array.isArray(numbers)) {
        array = numbers.map(Number);
    } else {
        array = numbers.split(' ');
    }
    let max = Math.max(...array);
    let min = Math.min(...array);
    return  max +  " " + min;
}