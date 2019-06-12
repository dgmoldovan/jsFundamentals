function pigLatinTest(testWord) {
    let vowels = ["a", "e", "i", "o", "u"];
    let startLetter = testWord.slice(0,1);
    let midWord = testWord.slice(1);
    let newThing = (midWord + startLetter + "ay");

    for (let i=0; i < vowels.length; i++) {
        if (testWord.charAt(0) == vowels[i]) {
            console.log(testWord + "ay")
        }
        // else {
        //  return newThing
        // }
    }
    console.log(newThing);
}

pigLatinTest('audio');


/*
Challenge (Strings):
Pig Latin:

Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.

If able to do so, return the value into another variable and print that variable

What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. 
        Pig Latin => IgPay Atinlay,
          I like pig latin => iay ikelay igpay atinlay , 
          Does this dress come in blue => oesday histay ressday omecay inay luebay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word


My tools :
function w/ parameter 
ability to separate string ( .split(' '))
way to loop through words
ability to separate letters of strings( .split(''))
way to loop through individual letters in words
comparison statement to see if *first* letter is a vowel
way to move consonant back to end of word with 'ay' 
way to join all strings back together(.join('') )

My Steps : 
1) create and name a function with a parameter
2) split string into multiple words [arr]; 
3) split words into multiple letters [arr]; 
4) check if first letter of word is a consonant
        a) if it is, send letter to back of word, with 'ay' 
        b) if it isnt, add 'ay' to end of word
5)return word
6)return words

*/

let sample = 'Autumn sure do like pig latin'; 

function pigLatin(str){
    let wordsArray =str.split(' ');
    wordsArray.forEach((word, index) => {
        let lettersArray = word.toLowerCase().split('');
        if (lettersArray[0] !=='a' && lettersArray[0] !=='e' && lettersArray[0] !=='i'&&lettersArray[0] !=='o' && lettersArray[0] !=='u') {
            lettersArray.push(lettersArray[0]);
            lettersArray.shift();
        }
        lettersArray.push('ay');
        wordsArray[index] = lettersArray.join('');
    })
    return wordsArray.join(' '); 
}

console.log(pigLatin(sample)); 
