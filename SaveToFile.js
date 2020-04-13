const fs = require('fs');

var jsonData = /*data*/;

var jsonObj = JSON.parse(jsonData);
console.log(jsonObj);

var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);

/*Gemmer én JSON fil*/
fs.writeFile("event.json", jsonContent, 'utf8', function(err) {
});
