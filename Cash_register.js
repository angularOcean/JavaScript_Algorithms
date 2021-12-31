function checkCashRegister(price, cash, cid) {
    let changeArr = [...cid].reverse();
    let changeDict = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.10,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE":5,
      "TEN":10,
      "TWENTY":20,
      "ONE HUNDRED": 100
    }
    
    let registerDict = {
      status: "OPEN",
      change: cid
    }
  
    let registerSum = 0
    for (let i = 0; i< cid.length; i++) {
      registerSum = registerSum + cid[i][1]
      //console.log(cid[i][1])
    }
    registerSum = Math.round((registerSum*100))/100
  
    //Check register and change due are the same
    //console.log(cash-price, registerSum, cash-price == registerSum)
    if (cash-price == registerSum){ 
      registerDict.status = 'CLOSED'
      registerDict.change = cid
      console.log(registerDict)
      return registerDict
    }
    //Check if change due is greater than register amount
    if (cash-price > registerSum) {
      registerDict.status = 'INSUFFICIENT_FUNDS'
      registerDict.change = []
      console.log(registerDict)
      return registerDict
    }
  
  
    let changeCalc = cash-price
  
    let changeGiven = {}
  
    for (let i = 0; i < changeArr.length; i++) {
      //console.log(changeDict[changeArr[i][0]])
      while (changeDict[changeArr[i][0]] <= changeCalc && changeArr[i][1] >0) {
        changeCalc = Math.round(changeCalc*100 - changeDict[changeArr[i][0]]*100)/100
        //console.log(changeCalc, 'current amt left')
        changeArr[i][1] = changeArr[i][1] - changeDict[changeArr[i][0]]
        if (changeGiven.hasOwnProperty(changeArr[i][0])) {
          changeGiven[changeArr[i][0]] = changeGiven[changeArr[i][0]] + changeDict[changeArr[i][0]]
        }
        else {
          changeGiven[changeArr[i][0]] =changeDict[changeArr[i][0]]
        }
        
        
      }
    }
    
    //console.log( changeGiven, "change given")
    let changeGivenArr = []
    for (var key in changeGiven) {
      changeGivenArr.push([key, changeGiven[key]])
    }
    console.log(changeGivenArr)
    if (changeCalc == 0) {
      
        registerDict.change = changeGivenArr
      }
      
    else {
      registerDict.change = []
      registerDict.status = "INSUFFICIENT_FUNDS"
    }
    
   
  
    //console.log(changeGivenArr, changeCalc)
    //console.log(changeDict)
    console.log(registerDict)
    return registerDict;
  }
  