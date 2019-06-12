function objChecker() {
    let obj = {
      key: "String"
    };
    //Write a conditional that will check the value of one property in an object and return a message. 
    //Using string interpolation, the message should take the type of the property and return 'The value is ${type}'. 
    //For instance, if sampleObject.sampleKey is a string, it return'The value is a string'.  
    //If sampleObject.sampleKey is a number, it will console.log 'The value is a number'.  
    //Make sure your conditional works for strings, numbers, and booleans. Use the object above
  }


 /* toolbox
 loop through keys of object looking for given "key"
 then
 look into value part of key and perform a typeof
 then console.log "the value is ${typeof the key"}
  */
 
  
  let obj = {
    key: null
  };
if (typeof obj.key == "string") {
    console.log(`The Value is a ${typeof obj.key}!`)
} else if (typeof obj.key == "number") {
    console.log(`The Value is a ${typeof obj.key}!`)
} else if (typeof obj.key == "boolean") {
    console.log(`The Value is a ${typeof obj.key}!`)
} else {
    console.log(`The Value is a ${typeof obj.key}!`)
} 


//console.log(obj.key)
  //  let pulled = typeof(obj.key)
  //console.log(`The Value is a ${pulled}!`)
  