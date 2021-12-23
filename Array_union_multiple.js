//This function takes two or more arrays and returns a new array of the unique values of the 
//provided arrays in their original order
//Given [1, 3, 2], [5, 2, 1, 4], [2, 1], the function would return [1, 3, 2, 5, 4]

function uniteUnique(...arr) {
    console.log(arr)
    var newArr = []
        for (var i = 0; i < arr.length; i ++) {
          for (var j = 0; j <arr[i].length; j++){
              if (newArr.includes(arr[i][j]) == false ){
              newArr.push(arr[i][j])    
              }
              
          }
      }
    return newArr;
  }