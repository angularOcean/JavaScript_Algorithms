//This function takes two arrays and a number and copies each element of the first array into the second array
//The function keeps the order of the elements in the first array and inserts the elements at the index given by the number
function frankenSplice(arr1, arr2, num) {
    var newArr = []
    for (var i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i])

    }
    for (var i = 0; i < arr1.length; i++) {
        newArr.splice(num+i, 0, arr1[i])

    }
    return newArr;
  }