function telephoneCheck(str) {
    let teleBool = false
  
    //regex witout parenthesis
    const teleRegex1 = /^1*\s*\d\d\d\s*-*\d\d\d-*\s*\d\d\d\d$/
    //regex with parenthesis
    const teleRegex2 = /^1*\s*\(\d\d\d\)\s*-*\d\d\d-*\s*\d\d\d\d$/;
    //console.log(teleRegex1.test(str), teleRegex2.test(str))
    if (teleRegex1.test(str)== true || teleRegex2.test(str) ==true) {
      teleBool = true
    }
    console.log(teleBool)
    return teleBool;
  }
  