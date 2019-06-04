var friend="Bob";

switch (friend) {
    case "Autumn":
        console.log("Hey Autumn, when are you going rock climbing");
        break;
    case "Dave":
        console.log("Hey Dave, how is Cooper?");
        break;
    case "Alecx":
        console.log("Hey Alecx, when are we playing DnD?");
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

var dessert = "milk shake"

switch (dessert) {
    case "pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "case":
        console.log("Cake is great!");
        break;
    case "ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log(`I'm sorry, ${dessert}, is not on the menu.`)
}

let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
        console.log("worked")
        break;
    case (yep > 0):
        console.log("worked!");
        break;
    default:
        console.log("didn't work");
}