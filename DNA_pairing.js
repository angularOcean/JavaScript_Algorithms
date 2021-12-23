//This function returns a 2d array of the base pairs of DNA 
//The function takes an argument, a string consisting of nucleobases GTCA
//and returns an array of each base and its complementary pair. 

function pairElement(str) {
    var dnaDict = {
        "A": "T",
        "G": "C",
        "C": "G",
        "T": "A"
    }
    var dnaArr = []
    var strArr = str.split("")
    
    for (var i = 0; i < strArr.length; i ++) {
      var tempArr = []
      tempArr.push(strArr[i])
      tempArr.push(dnaDict[strArr[i]])
      dnaArr.push(tempArr)
    }

    console.log (dnaArr)
    return dnaArr;
  }