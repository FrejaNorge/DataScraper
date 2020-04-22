/* 
    WebRequest(hostName,path)
    takes the parameters header, hostName and path"
    returns the specified webpages HTML code as .txt
*/

const billetlugenHeader = require('./headers.js');
const write = require('./writeRaw.js');
let https = require("https");


function WebRequestSecure(header,hostName,path){
    let options = {
        headers: header,
        host: hostName,
        path: path,
        port: 443        // http = 80, https = 443, ftp = 21
    };

    let p = new Promise((resolve, reject) => {
    
        let req = https.request(options, function(res) {
            let data = "";
            res.setEncoding("utf8");

            res.on("data", function (chunk) {
                data += chunk;
            });

            res.on("end", ()=> {
                resolve({ statuscode: res.statusCode, data: data});
            });  

            res.on('error', (err) => {
                reject({statuscode: res.statusCode, data: err});
            });
        });
        req.end();
    });

    return p;
}

function WebRequest(header,hostName,path) {
    let options = {
        headers: header,
        host: hostName,
        path: path,
        port: 443        // http = 80, https = 443, ftp = 21
    };

    let body = '';
    let data = '';
    let request = https.request(options, function(res) {

        res.setEncoding("utf8");
        console.log('Status code:', res.statusCode);
        res.on("data", function (chunk) {
            body += chunk;
        });

        res.on("end", function () {
            //write('billetlugenHTML.txt',body);
            return data += body;
       });             
    });

    request.end();
}

module.exports = {
    WebRequest,
    WebRequestSecure,
}