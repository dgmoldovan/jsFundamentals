// * Object.keys() and Object.values()

// * Object.keys() is a method that returns an array of a given objects own property names

// * Object.values() is a method tht returns an array of a given objects own enumerable property values. 
// * in the same orer as the provided by a 
// * for ... in loop ( the differnece being that a for in loop enumerates properties in the prototype chain)

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
  
// console.log(object.keys(spaceJam.toonSquad));
// console.log(object.keys(spaceJam.toonSquad.duck));
// console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam.toonSquad));

// * Square Bracket Notation
// * Square bracket notation can help us be able to find a value in an objec. 
// * This way can be handy if we need to set a key to a variabl and then use that bariable to parse through an object

let garden = {
    vegetable: 'zucchini',
    flower :  'sun flower',
    fruit : 'apple',
    water : true,
    sun: true,
    size : 10
}

//console.log(garden.water)

let x = 'vegetable';
console.log(garden[x]);

let baking = {};
baking['zucchini'] = 'better make some bread!'; //* creating a new key/value pairing
// console.log(baking.garden.vegetable); does not work
console.log(baking[garden['vegetable']]);

let pie = {}
pie['apple'] = 'Pie, pie, me oh my!';


let garden = {
    vegetable: 'zucchini',
    flower :  'sun flower',
    fruit : 'apple',
    water : true,
    sun: true,
    size : 10
}

let key = 'water';
Object.keys(garden).forEach(g => {
    console.log(g)
    if (key === g) {
        console.log("lets water the garden");
    }
});
