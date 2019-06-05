let w = 6;

//if statement
if(w>0){
    console.log("yes")
} else {
    console.log("no")
}

//Ternary
(w>0) ? console.log("yes") : console.log("no");


// else if
if (w == 0) {
    console.log("hello");
} else if (w < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

(w==0) ? console.log("hello") : (w < 0) ? console.log("hi") : console.log('goodbye');

var age = 30;

(age>=25) ? console.log("Yay! You can rent a car!") : (age>=21) ? console.log("Yay! You can drink!") : (age>=18) ? console.log("Yay!, you can vote!") : console.log("Sorry, you are too young to do anything fun.");


var yes = -8
(yes < 0 && yes > -10) ? console.log("worked") : (yes > 0) ? console.log("worked") : console.log("didn't work");