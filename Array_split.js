//This function splits an array into groups the length of a given size and returns them as a two dimensional array
//The function takes two arguments, the first an array, and the second a integer for the size of the array to split it into

function chunkArrayInGroups(arr, size) {
    var newArr = []
    var count = 1
    for (var i = 0; i < arr.length; i = i + size) {
        var tempArr = []
        count ++
        for (var j = 0; j < size; j++) {
            if (i+j == arr.length) {
                newArr.push(tempArr)
                break
            }
            else if (j == size -1){
              tempArr.push(arr[i+j])
              newArr.push(tempArr)
            }
            else {
              tempArr.push(arr[i+j])
            }
            
        }

    }
    console.log(newArr)
    return newArr;
  }
  