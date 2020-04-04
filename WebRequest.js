/* 
    WebRequest()
    takes the parameters "hostName and path"
    returns the specified webpages HTML code in log
*/
function WebRequest(hostName,path) {

    let https = require("https"),
        util = require("util");

    let options = {
                    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246' },   // Browser header                   
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
            util.log(body);
        });
    });

    request.end();
}

WebRequest('www.facebook.com','/events');