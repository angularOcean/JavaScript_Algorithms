//This function looks through an array and returns the first element in it that passes a 'truth test'
//The function takes two arguments, first the array to look through, and second a function (func(x)) that tests if X is true

function findElement(arr, func) {
    for (var i = 0; i < arr.length; i++){
        if (func(arr[i])== true) {
            return arr[i]
        } 
    }

    return undefined;
  }
  