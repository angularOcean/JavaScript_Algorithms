//This function converts a string to all lower case words joined by dashes

function spinalCase(str) {
  var spineArr = str.match(/[A-Z][a-z]+|[a-z]+/g)
  spineArr = spineArr.join("-").toLowerCase()
  return spineArr;
}