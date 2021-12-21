//This function returns the lowest index at which a value should be inserted into an array of sorted numbers
//The function takes two arguments, the first the array of numbers, and second the value to be inserted into the array

function getIndexToIns(arr, num) {
    arr.sort(function(a,b){return a-b})
    if (arr.length == 0) {
      return 0
    }
    for (var i = 0; i < arr.length; i++) {
        if (num <= arr[i]) {
            console.log('equal',i)
            return i
        }
    }
    return arr.length 
  }