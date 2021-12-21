//This function removes all false values from an array
//False values include false, null, 0, '', undefined, and NaN

function bouncer(arr) {
    var newArr = []
    for (var i =0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }

    return newArr;
  }