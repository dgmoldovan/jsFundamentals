let colors = ["red", "blue", "green", "yellow", "violet", "orange", "pink", "teal", "purple","black"]
let suffixes = ["st", "nd", "rd", "th", "th", "th", "th", "th", "th", "th"]

function orderedColors(color, sufx){
    color.forEach((c,n)) => {
        console.log(`${n+1}${sufx[n]} is ${c}`)
    }
} 

orderedColors(colors,suffixes)
  
    
    
    
    
    
    
    
    
    /*for(i = 0; i < colors.length; i++){
        let numberSpot= ([i])
        console.log(numberSpot)
    }
}
orderedColors()
*/
