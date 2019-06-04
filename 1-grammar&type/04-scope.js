//* SCOPE

//* 1)Global Scope : Planet Earth
//* 2)Local Scope : Indianapolis

//* Scope refers to where a variable is defined and accessible.

var x = 12;
function scope() {
  var x = 33;
  console.log(x); //33
}
scope();
console.log(x);  //12
var y = 12;
function scope() {
  y = 33; 
  console.log(y);  //33
}
scope();
console.log(y);  //33
// * var vs let
var x = 12;
function varTest() {
  var x = 33;
  if(1 == 1){
    var x = 45;
    console.log(x); //45
  }
  console.log(x);  //45
}
varTest();
console.log(x);  //12
var x = 12;
function letTest() {
  var x = 33;
  if(true){
    let x = 45;
    console.log(x); //45 
  }
  console.log(x);  //33
}
letTest();
console.log(x);  //12
function constTest() {
  const scope = 1;
  if(true) {
    const scope = 2;
    console.log(scope);  //2
  }
  console.log(scope); //1
}
constTest();