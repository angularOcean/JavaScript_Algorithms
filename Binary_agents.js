//This function returns an English translated sentence of the passed binary string
//The function takes a binary string and converts it to UTF-16
function binaryAgent(str) {
    let binArr = str.split(" ")
    let intArr = []
    let strArr = []
    for (let i = 0; i < binArr.length; i++) {
      intArr.push(parseInt(binArr[i], 2))
    }
    for (let i = 0; i < intArr.length; i++) {
      strArr.push(String.fromCharCode(intArr[i]))
    }
    strArr = strArr.join("")
    console.log(strArr)
    return strArr;
  }
  