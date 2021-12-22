//This function compares two arrays and returns any elements found in one or the other but not both
//The function takes two arguments, two arrays of items to be compared

function diffArray(arr1, arr2) {
    const newArr = [];

    for (var i = 0; i < arr1.length; i ++) {
        var boolCheck = false
        for (var j = 0; j < arr2.length; j ++) {
            if (arr2[j]===arr1[i]) {
                boolCheck = true
            }
        }
        if (boolCheck == false) {
            newArr.push(arr1[i])
        }
    }
    for (var i = 0; i < arr2.length; i ++) {
        var boolCheck = false
        for (var j = 0; j < arr1.length; j ++) {
            if (arr1[j]===arr2[i]) {
                boolCheck = true
            }
        }
        if (boolCheck == false) {
            newArr.push(arr2[i])
        }
    }
    return newArr;
  }