//This function trncates a string if it is longer than the given maximum string length
//Function takes two arguments, first the string, and second the string length. 
//Function returns the truncated string with an ellipses ending (...)

function truncateString(str, num) {
    if (str.length > num) {
        var newStr = str.slice(0, num) +"..."
        return newStr;
    }
    else {
      return str
    }

  }