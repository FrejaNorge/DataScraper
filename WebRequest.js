/* 
    WebRequest(hostName,path)
    takes the parameters "hostName and path"
    returns the specified webpages HTML code in log
*/
function WebRequest(hostName,path) {

    let https = require("https"),
        util = require("util");
    
    let headers = {
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'empty',
        'X-Distil-Ajax': 'wvvcydsefvucerceufyutv',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
        'DNT': '1',
        'Content-Type': 'text/plain;charset=UTF-8',
        'Accept': '*/*',
        'Origin': 'https://www.billetlugen.dk',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Referer': 'https://www.billetlugen.dk/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=140&nurbuchbar=true&showFilter=yes&tipps=yes',
        'Accept-Language': 'da-DK,da;q=0.9,en-DK;q=0.8,en;q=0.7,en-US;q=0.6',
        'Cookie': 'TCPID=120311653592455043390; D_SID=147.78.29.165:PX9W7tT1Ja7/ul537m7gNjfapJoN96yxbyisqRwpR+c; _ga=GA1.2.759982859.1584374039; _gcl_au=1.1.1023680056.1584374040; frosmo_keywords=.; __zlcmid=xFizNzixMR2JMY; D_ZID=697E4080-2A32-3F35-9E0A-87D67F89B373; D_ZUID=D026B41A-9A2B-39B6-9845-30DF17A293CD; D_HID=FCBBEF85-831A-3F80-927D-CEA8DA00FE11; _gid=GA1.2.594310943.1586499738; permInfo=1584181188096578601A10042020A11042020; D_IID=42B67594-5031-3ECE-9CBE-237F56E13C1C; D_UID=C5ED275F-0A71-3068-85EE-FCFEC5A96052; dd=1; webid=REtBX05PX1NFU1NJT04=; InitialReferrer=; WebCo_Tracker_Test_1_9=old; webshop=YWZmaWxpYXRlPURLQSZhbW91bnQ9MCZhbW91bnRfZXZpZHM9MCZjb3Vwb249MC4wMCZjb3Vwb25fZm9ybWF0dGVkPTAlMkMwMCZjdXJyZW5jeV9jb2RlPURLSyZjdXJyZW5jeV9zeW1ib2w9REtLJmRldmljZV9pbmZvPTAmZXZpZHNfaW5fY2FydD0mZXZvX215Y2x1YnNfbWVtYmVyPSZnaWZ0d3JhcHBlcj0wLjAwJmdpZnR3cmFwcGVyX2Zvcm1hdHRlZD0wJTJDMDAmaW5zdXJhbmNlPTAuMDAmaW5zdXJhbmNlX2Zvcm1hdHRlZD0wJTJDMDAma2V5PTRXNTNOSFVkZEZwRCZrcHNfdXJsPSZsYW5ndWFnZT1kYSZsb2NhbGU9ZGFfZGsmbG9naW49MCZtZXJraXRlbXM9MCZtb2Q9MSZvcmRlcl90b3RhbD0wLjAwJm9yZGVyX3RvdGFsX2Zvcm1hdHRlZD0wJTJDMDAmcGtpZHNfaW5fY2FydD0mcHJpY2U9MC4wMCZwcmljZV9mb3JtYXR0ZWQ9MCUyQzAwJnJhbmRvbT03MjU5MyZyZWZlcmVyPWh0dHBzJTNBJTJGJTJGd3d3LmJpbGxldGx1Z2VuLmRrJTJGJnJlc2VydmF0aW9uX2R1cmF0aW9uPTAmc2hpcHBpbmc9MC4wMCZzaGlwcGluZ19mb3JtYXR0ZWQ9MCUyQzAwJnRpY2tldGFtb3VudF9wcmljZXNfcGtpZD0mdGlja2V0cHJpY2U9MC4wMCZ0aWNrZXRwcmljZV9mb3JtYXR0ZWQ9MCUyQzAwJnRvdGFsPTAuMDAmdG90YWxfZm9ybWF0dGVkPTAlMkMwMA==; frosmo_quickContext=%7B%22VERSION%22%3A%221.1.0%22%2C%22UID%22%3A%22ekgab7.k7une9aa%22%2C%22origin%22%3A%22billetlugen_dk%22%2C%22lastDisplayTime%22%3A%7B%2261993%22%3A1586599636%2C%2262571%22%3A1586599636%7D%2C%22lastRevisionId%22%3A%7B%2261993%22%3A1%2C%2262571%22%3A1%7D%2C%22lastPageView%22%3A%7B%22time%22%3A1586599636234%7D%2C%22states%22%3A%7B%22session%22%3A%7B%7D%7D%7D'
    };

    let options = {
                    headers: headers,
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

module.exports = WebRequest;