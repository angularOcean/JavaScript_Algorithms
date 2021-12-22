//This function takes a string and converts it to pig latin
//Pig latin takes a word and if it begins with a consonant takes the first consonant
//or consonant cluster and moves it to the end of the word and adds ay to it
//if the word begins with a vowel it just adds way to it

function translatePigLatin(str) {
    var pigword = null
    //checks if string begins with vowel
    if (str.match(/^[aeoiu]/i) != null) {

      pigword = str.concat("way")
    }
    //checks if string begins with consonant
    else if (str.match(/^[^aeoiu]+/i) != null) {
      var firstword = str.match(/^[^aeoiu]+/i)
      var secondword = str.replace(/^[^aeoiu]+/i, "")
      pigword = secondword.concat(firstword).concat("ay")
    }
    return pigword;
  }
  