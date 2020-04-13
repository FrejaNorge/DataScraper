/* 
    WebRequest(hostName,path)
    takes the parameters header, hostName and path"
    returns the specified webpages HTML code as .txt
*/

const billetlugenHeader = require('./headers.js');
const write = require('./writeRaw.js');

function WebRequest(header,hostName,path) {

    let https = require("https");
    
    let options = {
        headers: header,
        host: hostName,
        path: path,
        port: 443        // http = 80, https = 443, ftp = 21
    };

    let body = '';
    let request = https.request(options, function(res) {

        res.setEncoding("utf8");
        console.log('Status code:', res.statusCode);
        res.on("data", function (chunk) {
            body += chunk;
        });

        res.on("end", function () {
            write('billetlugenHTML.txt',body);
       });             
    });

    request.end();
}

module.exports = WebRequest;