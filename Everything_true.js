//This function checks if a collection of objects in an array all evaluate to true
//The function accepts two arguments, the first an array and the second the argument to test against. 
//The function returns a boolean 
//If any element evaluates to false or is not a property of the object then the function returns false, else it returns true 
function truthCheck(collection, pre) {
    let boolCheck = true
    for (let i = 0; i < collection.length; i++) {
      //console.log(collection[i].hasOwnProperty(pre), pre)
      if (collection[i].hasOwnProperty(pre) == false) {
        console.log('false triggered on has prop', pre)
        boolCheck = false
      }
      if (collection[i][pre] == null ||collection[i][pre] == undefined || collection[i][pre] == 0 || collection[i][pre] == false|| Number.isNaN(collection[i][pre])) {
        //console.log ('value is not true',collection[i][pre])
        boolCheck = false
      }
    }
    //console.log(boolCheck, pre, collection)
    return boolCheck;
  }
  