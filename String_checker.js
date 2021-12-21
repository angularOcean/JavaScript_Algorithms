//This function checks if one string contains all the same letters regardless of capitalizations etc. as another string
//The function takes one argument, an array containing two elements: the two strings to be compared and returns a boolean
//The functin will compare the second element of the array to the first and check if the first contains all the letters as the second

function mutation(arr) {
    var arr1 = arr[0].toLowerCase().split("")
    var arr2 = arr[1].toLowerCase().split("")
    var strCheck = []
    for (var i = 0; i < arr2.length; i++) {
        for (var j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                strCheck.push(arr2[i])
                break
            }
            
        }
    }
    arr2 = arr2.join("")
    strCheck = strCheck.join("")
    if (arr2 == strCheck) {
        return true
    }
    return false;
  }