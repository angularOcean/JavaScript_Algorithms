//This function flattens a nested array like a steamroller
//The function takes one argument, an array, and if the array contains more arrays, it will return an array of all the contents of the nested arrays as a single array.
function steamrollArray(arr) {
    let newArr = []
  
    return steamHelp(arr, newArr);
  }
  
  function steamHelp (arr, acc) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        acc = steamHelp(arr[i], acc)
  
      }
        else {
          acc.push(arr[i])
      }
  
    }
    console.log(acc)
    return acc
  }
  