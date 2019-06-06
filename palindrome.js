let testWord = "hannah"
// splits the word - flips the word- recombines - tests vs the original
if (testWord.split('').reverse().join('') == testWord) {
    console.log(testWord)
} else {
    console.log("This is not a palindrome!")
}

// other ways
let testWord = "Taco"
let flipReverseCombine = (testWord.split('').reverse().join('') == testWord)

if (flipReverseCombine) {
    console.log(testWord) = ""
} else {
    console.log(` ${testWord} is not a palindrome!`)
}  

//more ways

let testWord = "browns"
function reverseWord() {
    let backWord = (testWord.split('').reverse().join(''))
    console.log(backWord)
}
//let backWord = otherWay
reverseWord()


function checker(word) {
    let newWord = word.toLowerCase() //added this due to any change is casing resulted in a wrong result
    if (newWord === newWord.split('').reverse().join('')) {   //breaks the word into letters reverse the order then recombines them
      console.log(`${word} is a palindrome! Yay!`);
    } else {
        console.log(`${word} is not a palindrome! Boo!`)
    }
  }
  //insert word to be checked below
  checker("brains")

  function whatDoesItDo(val) {
    return val ? 1 : 2;
  };

  function whatDoesItDo(color) {    
    if (color !== 'blue' || color !== 'green') {
       color = 'red';
    }
    return color;
 }; 

 console.log(whatDoesItDo());




// testWord.split("").reverse().join("")

