function palindrome(str) {
    let cleanStr = str.toLowerCase()
    cleanStr = cleanStr.replace(/[^a-z0-9]+/g, "")
    let oldArr = cleanStr.split("")
    let count = oldArr.length
    let newArr = []
    for (let i = 0; i < count; i ++) {
      newArr.push(oldArr.pop())
    }
    let revStr = newArr.join("")
    console.log(revStr,"vs", cleanStr, cleanStr == revStr)
    if (cleanStr == revStr) {
      return true
    }
    return false;
  }
  