//This function finds and returns the longest word in a provided string
//Function returns the length of the longest word as a number
function findLongestWordLength(str) {
    var longestWord = 0
    var wordArr = str.split(" ")
    for (var i = 0; i < wordArr.length; i++) {
        if (wordArr[i].length > longestWord) {
            longestWord = wordArr[i].length
        }
    }
    return longestWord;
  }
