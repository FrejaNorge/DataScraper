var fs = require('fs');

fs.readFile('event.json', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
});