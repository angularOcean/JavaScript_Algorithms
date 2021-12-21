//This function returns the factorial of the provided integer utilizing recursion
function factorialize(num) {
    console.log(num)
      if (num == 0) {
          return 1
      } 
      else {
          return num * factorialize(num-1)
      }
  
    }