//This function matches an array of objects with all matching key/value pairs 
//The function takes two arguments, the first an array of objects
//and second another array of objects to be matched against
//The function then returns an array of all objects from the second argument that matches the first

function whatIsInAName(collection, source) {
    const arr = [];
    for (var key1 in collection) {
        var boolCheck = true
        for (var key2 in source) {
          if (source[key2] != collection[key1][key2]) {
            boolCheck = false
        }
      }
      if (boolCheck == true) {
        arr.push(collection[key1])
      } 
    }
    return arr;
  }