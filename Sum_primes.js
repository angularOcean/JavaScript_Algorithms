//This function takes a number and finds all primes less than or equal to that number
//The function then sums all the primes it found and returns that sum 

function sumPrimes(num) {
    let primes = findPrimes(num, null, 2)
    let sumPrime = 0
    for (let i = 0; i < primes.length; i++) {
      sumPrime = sumPrime + primes[i]
    }
    console.log(primes,sumPrime)
    return sumPrime;
  }
  
function findPrimes(num, primeArr, count) {
    if (primeArr == null) {
        primeArr = []
    }
    if (count == num && primeCheck(count) == false) {
        return primeArr
    }
    else if (count == num && primeCheck(count) == true) {
        primeArr.push(count)
        return primeArr
    }
    
    if (primeCheck(count) == false){
        return findPrimes(num, primeArr, count+1 )
    }
    else {
        primeArr.push(count)
        return findPrimes(num, primeArr, count+1 )
    }
}

function primeCheck (num) {
        let boolCheck = true
    if (num ==1 ||num ==2) {
        return true
    }
    else if (num >=3) {
      for (let i = 2; i < num; i++) {
          if (num%i ==0) {
              boolCheck = false
          }
    }

    return boolCheck
    }
}