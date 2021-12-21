//This function reverses a provided string
function reverseString(str) {
    let strArr = str.split("")
    let newArr = []
    for (var i = 0; i < str.length; i++) {
        newArr.unshift(strArr[i])
    }
    let newstr = newArr.join("")    
    return newstr;
  }

console.log('string')