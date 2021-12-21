//This function returns an array consisting of the largest numbers from each sub-array

function largestOfFour(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      var tempNum = null
      for (var j = 0; j < arr[i].length; j++ ) {
        if (j == 0) {
          tempNum = arr[i][j]
        }
        else if (arr[i][j]> tempNum) {
          tempNum = arr[i][j]
        }

      }
      newArr.push(tempNum)
    }
    return newArr;
  }
