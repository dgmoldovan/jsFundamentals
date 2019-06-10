const instructors = [
    { first: "Autumn", last: "Henderson", language: "JS", powerLevel: 200 },
    { first: "Alecx", last: "Moritz", language: "JS", powerLevel: 176 },
    { first: "David", last: "Whitt", language: "JS", powerLevel: 198 },
    { first: "Tyler", last: "Shelton", language: "JS", powerLevel: 234 },
    { first: "Ingeborg", last: "Slegers", language: "JS", powerLevel: 182 },
    { first: "Zachary", last: "Maynard", language: "JS", powerLevel: 167 }
  ];

  console.log(instructors.length)

let totalPower = instructors.reduce((acc,val) => {
    return acc + val.powerLevel;
},0 );

let average = (totalPower/instructors.length)

console.log(average)




  function compare(a,b) {
    const powerA = a.powerLevel
    const powerB = b.powerLevel

    let comparison = 0;
    if (powerA > powerB) {
        comparison = 1;
} else if (powerA < powerB) {
    comparison = -1;
}
    return comparison;
}
instructors.sort(compare);
console.log(instructors)

//instructors.sort(powerFunction(a, b)) {
   // return a.powerLevel-b.powerLevel
//}



  let over175 = instructors.filter(checkLvl => {
    return checkLvl.powerLevel > 175; 
});
console.log(over175)


let firstLast = instructors.map(instructor => [instructor.first, instructor.last]); 
console.log(firstLast);

console.log(firstLast)
  
  //let over175 = instructors.filter(instructors => powerLevel > 175);
  //console.log(over175)



 


