/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');

returns by default

Block Body
*********************
let hi = () => {
  console.log('hi')
}

does not return

*/ 

//normal
function coffee() {
    console.log("coffee is life");
}

let coffee = () => console.log("coffee is life");

let coffee = () => {
    console.log("coffee is life")
}

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cats and ${puppy} dogs`)
}

cats(2,12)

//Concise vs Block Bodies

//concise
let apples = x => `There are ${x} apples`;

console.log(apples(10));

//block
let apple2 = (x) => {
    return `There are ${y} apples also`;
}

/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

let calcTip = (total) => {
    let amountTotal= ((total * 0.25) + total)
    return amountTotal
}

let whatTip = calcTip(30)
console.log(whatTip)

