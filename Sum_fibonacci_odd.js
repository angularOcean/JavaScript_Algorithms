//This function sums all odd Fibonacci numbers less than or equal to a given number
//The function takes a positive integer and returns the sum of all numbers in the Fibonacci sequence up
//that are odd up to the passed integer argument

function sumFibs(num) {

    var allSum = sumFibsHelp(num, 1, 0)
    console.log(allSum, "Final sum")
    return sumFibsHelp(num, 1, 0);
  }

function sumFibsHelp(num, count, acc) {
    if (num == 1) {
        return 2
    }
    else if (count == num && count%2 != 0) {
        return count
    }
    else if (count == num && count%2 == 0) {
        return 0
    }
    else if (count > num) {
        return 0
    }

    else if (count%2 ==0  ) {
      //console.log(count, "even, don't add")
        return sumFibsHelp(num, count + acc, count) +  0
    }
    else {
      //console.log(count, "odd, do add")
        return sumFibsHelp(num, count + acc, count) +  count
    }

}