//This function converts characteres &, <, >, ", and ' in a string to their corresponding HTML entities
function convertHTML(str) {
    let htmlDict = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;"
    }
    for (var key in htmlDict ) {
        str = str.replaceAll(key, htmlDict[key])
    }
    console.log(str)
    return str;
  }
  