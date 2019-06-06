// * Iterating

//* forEach() method executes a provided function once for each array element.

// forEach() has three arguments: currentValue, the index, and the entire array.
//  currentValue = the current element being processed in the array
//  index = the index of the current element being processed 
//  array = the array the forEach method was called upon


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.forEach(f => { console.log(f);});
food.forEach((food, number) => {console.log(number); console.log(food)})
food.forEach((food, number, array) => {console.log(number); console.log(food); console.log(array)})


let foodFunction = () => {
    for (f in food) {
        console.log(f),
        console.log(food[f]),
        console.log(food),
  }
}

foodFunction()


let movies = ['Hot Fuzz', 'Robocop', 'Tropic Thunder', 'Blade Runner', 'Water World'];

movies.push("Mad Max");
movies.splice(4 , 1, "John Wick 3");

movies.forEach((name) => {console.log(name)})