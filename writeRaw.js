/* 
    writeRaw(filename, string) writes the raw HTML 
    to a .txt file takes the parameters filename and 
    string 
*/

function writeRaw(filename, string) {
    fs = require('fs');
        fs.appendFile(filename, string, function (err) {
        if (err) return console.log(err);
        console.log('HTML > rawHTML.txt');
    });
};

module.exports = writeRaw;