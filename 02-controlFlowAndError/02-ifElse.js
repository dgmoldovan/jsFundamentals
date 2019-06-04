//* IF Else Statement

/*
If (condition) {
    console.log();
} else {
    console.log();
}
*/

let weather = 75;

if (weather < 70) {
    console.log("Wear a Jacket");
} else {
    console.log("No jacket necessary!");
}



let name = "Greg"
if (name === "Garrett") {
    console.log("Hello my name is", name);
}else { 
    console.log("Hello, is your name", name,"?" );
}


//* .touppercase .tolowercase

let name = "aUTuMN"
let letter = name.charAt(0);

if (letter.toUpperCase() == letter) {
  let NewName = name [0]+name.replace(name[0,'']).toLowerCase();
  console.log(newName);
} else {
    let ame = name[0].toUpperCase()
}


let age = 20

if (age <= 17) {
    console.log("Sorry you are too young to do anything");
} else if (age >=18 && age<21) {
    console.log("Yay! You can vote!");
} else if (age >= 21 && age<25) {
    console.log("Yay!, You can drink!");
} else (age >= 25) {
    console.log("Yay! You can rent a car!");
}



