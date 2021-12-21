//This function repeats a given string X number of times
//The function takes two arguments, first the string to repeat, and second the number of time to repeat the string
//Does not utilize built in .repeat() method and reteurns an emtpy string if num is not positive

function repeatStringNumTimes(str, num) {
    var strArr = []
    if (num <1) {
        return ""
    }
    while (num > 0) {
        strArr.push(str)
        num -=1
    }
    var newstr = strArr.join("")
    return newstr;
  }