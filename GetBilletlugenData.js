/*
    GetBilletlugenData()

*/

const request = require('./WebRequest.js');       // Loads the module WebRequest.js


let body = request('www.billetlugen.dk','/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&hkId=140&index=0&nurbuchbar=true&show=25&showFilter=yes&sort_by=beginn&sort_direction=asc');

//let header = body.search("<h4><a href=", "class title=");


//let mySubString = body.substring(
//    body.lastIndexOf("<h4><a href=") + 1, 
//   body.lastIndexOf("class title=")
//);
//console.log(mySubString);

let test = body;
let testPrint = test.split("<h4>");

console.log(testPrint);