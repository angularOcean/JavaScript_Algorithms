//This function represents a person object with a first and last name and methods to set and get the first and last name

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(" ")[0]
    let lastName = firstAndLast.split(" ")[1]
    let fullName = firstAndLast
    
    this.getFullName = function() {
      console.log(firstName, 'first', lastName,'last', fullName)
      return fullName
    };
    this.getFirstName = function() {
      console.log(firstName, 'first', lastName,'last', fullName)
      console.log(firstName, 'get firstname')
      return firstName
    };
    this.getLastName = function() {
      console.log(firstName, 'first', lastName,'last', fullName)
      console.log(lastName, 'get lastName')
      return lastName
    };
    this.setFirstName = function(first) {
      firstName = first
      fullName = firstName + " " + lastName
      console.log(firstName, 'first', lastName,'last', fullName)
      console.log(fullName, "set firstname", firstName)
    }
    this.setLastName = function(last) {
      lastName = last
      fullName = firstName + " " + lastName
      console.log(firstName, 'first', lastName,'last', fullName)
      console.log(fullName, 'set lastname', lastName)
    }
    this.setFullName = function(firstAndLast) {
      fullName = firstAndLast
      firstName = firstAndLast.split(" ")[0]
      lastName = firstAndLast.split(" ")[1]
      console.log(firstName, 'first', lastName,'last', fullName)
      console.log(fullName, 'set fullname', fullName)
    }
    return firstAndLast;
  };
  