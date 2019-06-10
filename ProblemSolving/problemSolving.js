/*
"Think Like a Programmer", chapters 1-3, 8
  Always have a plan
    -Making a plan gives you structure, helps to give you a path to take. Even if it quickly becomes \
    clear it is not the right path, its a way to get yourself jumpstarted 

  Restate the problem
    -This is a great way to make the problem clear, and concise. Also a great way to figure out what
    is being asked and what is needed. Rubberducking - Talking to an inanimate object might be a good way to help you restate the problem to yourself better. 
  
Divide the problem
    - Break the problem up into smaller sections, this can help with the mental block that may come 
    from how large a problem may seem. You may not know how to get from A to C, but you can walk 
    from A to B, then from B to C
 
 Start with what you know
    -Once the problem is in smaller pieces, you might be able to solve one of those smaller problems. 
    Starting with what you know might be helpful in getting momentum to solve a problem
 
Reduce the problem
    -If you are finding the constraints of the question too difficult to navigate, try taking one away. 
    If you can't get a revered string back, can you get an array of strings back first? 
  
Look for analogies
    -If you cant find a way to a solution, try creating an analogy solution. What would give you a 
    similar result that youve already done before
  
Experiment
    -Sometimes theres only so much prep we can do with a problem, and were going to have to dive in. 
    Just trying a solution and finding out its wrong, gives you good clues as to what works and what doesnt
 
 Don't get frustrated
    -Being incorrect is a large part of development. Getting better means that you have tried many ways
    to do something and gotten used to where the pitfalls are. If youve started to get frustrated, that 
    means youve started deviating from your plan and techniques. Step away, take a break and make a better
    plan when you come back. Getting frustrated demotivates you and makes you feel like youre not making 
    progress
*/


/*
Farmer Jebb has brought his produce to the farmers market! He is excited because he has a new system to keep track of all the produce he sells to hipster vegans like Ronan and Kayden. He is a tech savy farmer, so hes made an array of his produce. 

let veggAmounts = [{name:'Sweet Potatoes',amount:4},{name:'Heirloom Tomatoes',amount:15},{name:'Kolrabi',amount:2},{name:'Honey Combs',amount:1}]

He also has an array of the prices for each one :
let veggPrices = [{name:'Sweet Potatoes',price:2},{name:'Heirloom Tomatoes',price:1.50},{name:'Kolrabi',price:4},{name:'Honey Combs',price:10}]

Oh no! Farmer Jebb needs both the amount and the prices to be in the same array of objects. Write a function that checks to see if each veggie in the veggAmount array has a matching veggie in the veggPrices. If they match, add that price to correct object in the veggAmounts array. Return the new array

Gathering tools is a great way to start planning your solution! Re-read the problem and see why i gathered the tools i did! 
    Tools:
    function because they asked
    for statement to cycle through objects
    object.keys object.values to check key values
    if statement to check if veggies are equal
    return to bring back new array
    dot notation to add values back into array 


   

    Make your plan here. State what needs to happen first. Make sure the steps are small enough that the goal is clear. 

    1) For statement to cycle through key names
    2) Compare key names in second array vs. first array
    3) If statement with function that pushes value of equal key to first array
    4)return the new array
    5)console log the new array
    ....make more steps if you need them! */

    let veggAmounts = [{name:'Sweet Potatoes',amount:4},{name:'Heirloom Tomatoes',amount:15},{name:'Kolrabi',amount:2},{name:'Honey Combs',amount:1}]

    let veggPrices = [{name:'Sweet Potatoes',price:2},{name:'Heirloom Tomatoes',price:1.50},{name:'Kolrabi',price:4},{name:'Honey Combs',price:10}]

    function veggPricePairing(){
        for(let i = 0; i < veggPrices.length ; i++) {
        if(veggAmounts[i].name == veggPrices[i].name){
            veggAmounts[i].price =  veggPrices[i];
        }
    }
    return veggAmounts
    /*  Object.keys(veggPrices).forEach(v => {
        console.log(veggPrices[v])
    })
/* Object.keys(veggPrices).forEach(v => {
        if (key === v) {
            console.log(veggPrices[v].name)
        }
    });
    */


// * A group of friends have decided to start a secret society. 
//The name will be the first letter of each of their names, sorted in alphabetical order.

// * Create a function that takes in an array of names and returns the name of the secret society.

// * Examples
// * societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

// * societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

// * societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

nameGroup = ["Adam", "Sarah", "Malcolm"]


for (x of nameGroup) {
    //console.log(x)
   let firstLetter = x.charAt(0)
   // console.log(firstLetter)
    let arr = [] ;
    arr.push(firstLetter)
   // console.log(arr)
    let code = arr.toString()
    console.log(code)
    
    
}   