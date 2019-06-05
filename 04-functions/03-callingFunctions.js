/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/

function hi() {
    console.log("hi");
    return "Hi";  //return brings values outside of functions
}

function counting() {
  for (i = 1; i <=10 ; i++ ) {
    console.log(i)
  }
}

counting()



let arr = ["this", "is", "really", "cool"];

function listItems() {
    for(item of arr) {
        console.log(item)
    }
}

listItems()