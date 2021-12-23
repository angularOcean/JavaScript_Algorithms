//This function performs a search on a string for a given set of arguments 
//and returns a new sentence with the arguments replacing the spots in the string
//Function takes three arguments, the string to perform the search and replace on
//and two other arguments, the word that will be searched for, and the word that will replace it
//Function will also match capitalization of the word


function myReplace(str, before, after){
    var capStr = /^[A-Z]/
    var newStr = null
    if (capStr.test(str.match(before)[0])) {
      var upperCase = after[0].toUpperCase() + after.slice(1)
      newStr = str.replace(before, upperCase)
    }
    else {
      newStr = str.replace(before, after.toLowerCase())
    }
    console.log(newStr)
    return newStr;
}