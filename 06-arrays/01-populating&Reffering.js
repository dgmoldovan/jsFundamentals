,/*
Arrays
************
Arrays are containers that hold lists of items

let list =  [  'item1',   'item2',    'item3'];
    (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas
*/

let list = [ 'item1', 'item2', 'item3'];
console.log(typeof lists);

let groceryList = ['oranges', 'bananas', 'oreos'];
console.log(groceryList[2])

let students = ['Tony','Marshall','Rhys', 'Ray', 23, true, ['Cory', 'Garrrett','Brian' ]];

//console.log(students instanceof Array);

console.log("Hello", )


let name = students[6]
console.log("Hello", name[2], "you look nice today.")

//*Populating and referring

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f in food) {
    console.log(f)
    console.log(food[f])
}

for (f of food) {
    console.log(f)
}

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.push('Pizza'); //adds to end of list
food.splice(1 , 1, 'Bananas');  //start location, number of items to replace, items to insert
food.splice(2, 0, 'Sweet Potato Pie')

food.pop(); //removes item from end of array
food.shift(); //removes item from the start of the array
food.unshift('Guacamole'); //adds item to the start of the array

for (f of food) {
    console.log(f)
}