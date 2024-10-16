// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

console.log(highAndLow('1 9 3 4 -5'));
function highAndLow(numbers){
    let array = numbers.split(' ');
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min >= array[i]) {
            min = array[i];
        }
        if (max <= array[i]) {
            max = array[i]
        }
    }
    console.log(array)
    return  max +  " " + min;
}