//This function finds the smallest common multiple that can be evenly divided by two integers
//as well as by all sequential numbers in the range between those two integers
//This function utilizes the Least Common Multiple method of Prime Factorization


function smallestCommons(arr) {
    let smallNum = null
    let bigNum = null
    if (arr[0] > arr[1]) {
        smallNum = arr[1]
        bigNum = arr[0]
    }
    else {
        smallNum = arr[0]
        bigNum = arr[1]
    }
    let multiple = 1
    let numArr = []
    for (let i = smallNum; i < bigNum+1; i++) {
        let tempArr = primeFactor(i, [])
        numArr.push(tempArr)
    }
    let sumArr = arrayUnion(numArr)
    for (var key in sumArr) {
      for (var i = 0; i < sumArr[key]; i ++) {
          multiple = multiple * key
      }
      
    }
    //console.log(numArr)
    //console.log(sumArr)
    //console.log(multiple)
    return arr;
  }

function primeCheck (num) {
    let boolCheck = true
if (num ==1 ||num ==2) {
    return true
}
else if (num >=3) {
  for (let i = 2; i < num; i++) {
      if (num%i ==0) {
          boolCheck = false
      }
}
    return boolCheck
    }
}
function primeFactor (num, primeArr) {
    if (num ==1) {
        return primeArr
    }
    if (num == 2 || primeCheck(num) == true) {
        primeArr.push(num)
        return primeArr
    }
    else if (primeCheck(num) == false) {
        for (let i = 2; i < num; i++) {
            if (num%i == 0) {
                primeArr.push(i)
                return primeFactor(num/i, primeArr)
            }        
        }

    }
}
function arrayUnion(arr) {
    let numDict = {}
    for (let j = 0; j < arr.length; j++) {
        let tempDict = {}
        for (let i = 0; i < arr[j].length; i++) {
            tempDict[arr[j][i]] = (tempDict[arr[j][i]] ||0) +1
        }
        for (var key in tempDict) {
            if (key in numDict) {
                if (tempDict[key] > numDict[key]){
                    numDict[key] = tempDict[key]
                }
            }
            else {
                numDict[key] =tempDict[key]
            }
        }
    }
    return numDict
    
}

