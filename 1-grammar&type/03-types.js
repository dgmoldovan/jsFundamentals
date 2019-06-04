/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off
*/ 
let i = true;
let j = false;
/*        (1)
1-Keyword for boolean - no quotation marks
*/
let on = true;
console.log(on); // true
let off = false;
console.log(off); // false
/*
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/
let empty = null;
console.log(empty); // null
/*
Undefined
******************
Undefined = no value assigned (not even an empty container)
UNDEFINED IS NOT AN ERROR
*/
let undef = undefined;// never do this
console.log(undef); // undefined
let grass;
console.log(grass); // undefined
/*
Null vs. Undefined 
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasnt been created yet. 
*/

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // (One more 9) JS gives you space for 15 9s before it rounds up to 10
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// js rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo); // double quotes single quotes

// Numbers vs. Strings
let first = 1050 + 100; 
let second = '1050' + '100';

console.log(first); // 1150
console.log(second); // 1050100

console.log(typeof first); // number
console.log(typeof second); // string

/*
Objects
***************

*/


let carl = {
    color: "red",
    tires: 4,
    extras: "A/C and Radio",
    cool: true
}

console.log(carl); // { color:'red', quantity: 4, extras: "A/C and Radio" cool: true}
console.log(typeof carl); // object
console.log(carl.color);

/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

let burritos = ['large', 4, true];
console.log(burritos); // ['large', 4, true]
console.log(typeof burritos);

/*
Addition vs. Concatenation
**************************
When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
 when it sees code adding together one or more strings, it changes and the plus sign becomes an assignment operator-
 -it smashes the values together without trying to synthesize the values
*/
  
let third = 1050 + '100';

console.log(third); // 1050100
console.log(typeof third); // string

/*
With the plus operator, if 1 string and 1 number are given to the plus sign, it returns a string
*/


let address = {
    firstName : "Daniel",
    lastName : "Moldovan",
    houseNumber : 4310,
    street : 'Alconbury Ln',
    city : "Houston",
    state : "TX",
    zipcode : 77021,
}

console.log(address);

let firstName = "Daniel";
let lastName = "Moldovan";
let houseNumber = 4310;
let street = "Alconbury Ln";
let city = "Houston";
let state = "TX";
let zipcode = 77021;

console.log(firstName, lastName, houseNumber, street, city, state, zipcode);

/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 

let myName = "Autumn";
console.log(myName.length);

let myName = "Garrett";
console.log(myName.length);

/*Methods
************
Methods are like tool that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties*

*/
let myNameIs = "Autumn";
console.log(myNameIs.toUpperCase()); // method that changes a string to uppercase. 

let home = 'My home is indianapolis'; 
console.log(home.includes('indianapolis')); // method that checks if a certain string is included in another string

let sent = "This sentence will be split into individual parts ";
console.log(sent.split(" "));
