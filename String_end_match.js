//This function checks if a string ends with a different given string
//The function takes two arguments, the first the string to analyze and the second the target string to check
//This function attempts to accomplish the task without .endsWith()

function confirmEnding(str, target) {
    var strArr = str.split("")
    var strCheck = str.slice(str.length-target.length, str.length)
    return strCheck == target;
  }