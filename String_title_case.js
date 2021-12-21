//This function returns a provided string with each word capitalized
//The function takes one string as an argument and will capitalize the first letter while the rest remains in lower case
function titleCase(str) {
    var strArr = str.split(" ")
    var titleStr = []
    for (var i = 0; i < strArr.length; i++) {
        var wordArr = strArr[i].split("")
        var newArr =[]
        for (var j = 0; j < wordArr.length; j++) {
            if (j == 0) {
                
                newArr.push(wordArr[j].toUpperCase())
            }
            else{
                newArr.push(wordArr[j].toLowerCase())
            }

            }
        titleStr.push(newArr.join(""))        
        }
    var finalStr = titleStr.join(" ")
    return finalStr;
    }
