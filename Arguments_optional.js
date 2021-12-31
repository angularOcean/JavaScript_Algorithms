//This function sums two arguments together, if only one argument is provided then the function returns a function that expects one argument and returns the sum
//The function returns undefined if any argument passed is not a number

function addTogether(num1, num2 = false) {
    if (typeof num1 != 'number' ){
      return undefined
    }
    if (num2 == false) {
      return function(num3) {
        if( typeof num3 != 'number') {
          return undefined
        }
        return num1 + num3
      }
    }
    if ( typeof num2 != 'number') {
      return undefined
    }
    
    return num1+num2;
  }
  
  