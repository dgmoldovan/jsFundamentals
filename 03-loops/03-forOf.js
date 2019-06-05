/**************
 For Of Loops
 *************/

 var student = {
     name : "Peter",
     awesome : true ,
     degree : "Javascript",
     week : 1
 };

 for(item of student){
     console.log(item)
 }

 var catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

 for(cat of catArray){
     console.log(cat);
 }