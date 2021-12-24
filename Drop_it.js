//This function searches through an array and drops each element from the first if the function passed
//evaluates to false. The function stops when the argument function evaluates to true and returns the remaining array

function dropElements(arr, func) {
    let newArr = [...arr]
    for (let i = 0; i < arr.length; i++) {
      console.log(func(arr[i]), arr[i])
      if (func(arr[i])== false) {
        newArr.shift()
      }
      else {
        break
      }
  
    }
    console.log(newArr)
    return newArr;
  }