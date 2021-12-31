function rot13(str) {
    let rotDict = {
      'A':'N',
      'B':'O',
      'C':'P',
      'D':'Q',
      'E':'R',
      'F':'S',
      'G':'T',
      'H':'U',
      'I':'V',
      'J':'W',
      'K':'X',
      'L':'Y',
      'M':'Z',
      'N':'A',
      'O':'B',
      'P':'C',
      'Q':'D',
      'R':'E',
      'S':'F',
      'T':'G',
      'U':'H',
      'V':'I',
      'W':'J',
      'X':'K',
      'Y':'L',
      'Z':'M' 
    }
  let newStr = ""
  for (let i = 0; i<str.length; i ++) {
    console.log(str[i] in rotDict, str[i])
    if (str[i] in rotDict) {
      newStr = newStr + rotDict[str[i]]
    }
    else {
      newStr = newStr + str[i]
    }
  }
  
  
  //const alpha = Array.from(Array(26)).map((e,i) => i+65)
  //const alphaArr = alpha.map((x) => String.fromCharCode(x))
  
  //console.log(alphaArr)
  
    console.log(newStr)
    return newStr;
  }
  
