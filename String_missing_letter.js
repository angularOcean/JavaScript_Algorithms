//This function looks through a string in alphabetical order and returns any letter missing
//The function takes a string of letters such as "abce" and returns the missing letter "d"
//If no letters are missing, returns 'undefined' 

function fearNotLetter(str) {
    var returnLetter = undefined
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var startIndex = alphabet.match(str[0]).index
    var endIndex = alphabet.match(str[str.length-1]).index
    var indexCount = 0    
    for (var i = startIndex; i < endIndex; i++) {
        if (alphabet[i] != str[indexCount]) {
          returnLetter = alphabet[i]
          break
        }
        indexCount ++
        
    }

    return returnLetter;
  }
