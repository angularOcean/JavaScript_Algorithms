//This function searches through an array and removes one or more elements provided to it
//The function takes multiple arguments, the first is an array, and then multiple arguments to remove

function destroyer(arr, ...args) {
    var tempArr = []
    for (var i = 0; i < arr.length; i++){
        var boolCheck = false
        for (var j = 0; j < args.length; j++) {
            if ( arr[i]== args[j]) {
                boolCheck = true
            }

        }
        if (boolCheck == false) {
            tempArr.push(arr[i])
        }
        
    }
    console.log(tempArr)
    return tempArr;
  }
  