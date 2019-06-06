// * Length

let long = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10]

console.log(long.length);

let colors = ["blue", "green", "yellow", "red", "orange", "purple"];

console.log(colors.toString());

console.log(typeof colors.toString());

colors.forEach(color => console.log(color))


let arr = [1,2,3,4,5]

console.log(typeof arr)
arr.reverse()

arr.forEach(change => console.log(change))

if (arr instanceof Array) {
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
} else {
    console.log("This is not an array")
}
