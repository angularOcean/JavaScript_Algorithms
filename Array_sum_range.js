//This function takes a two element array of two integers and sums all the numbers between them, inclusive
//The function takes one argument, an array

function sumAll(arr) {
    var largerVal = null
    var smallerVal = null
    if (arr[0] > arr[1]) {
        largerVal = arr[0]
        smallerVal = arr[1]
    }
    else {
        largerVal = arr[1]
        smallerVal = arr[0]
    }
    var sumCount = 0
    for (var i = smallerVal; i < largerVal+1; i++) {
        sumCount = sumCount + i
    }
    return sumCount
}