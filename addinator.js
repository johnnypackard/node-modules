function addinator(array) {
    // array is an array of numbers
    let sum = 0;
    for ( let i=0; i<array.length; i++ ){
        sum += array[i];
    }
    return sum;
}

module.exports = addinator;