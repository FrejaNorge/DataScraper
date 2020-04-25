/*
    GetFaceBookData()

*/
const request = require('./WebRequest.js');       // Loads the module WebRequest.js
const header = require('./headers.js');  



async function getFaceBookData() {

    let data = [];

try {
                
    result = await request.WebRequestSecure(header.facebookHeader, 'www.facebook.com', '/events/discovery/?acontext=%7B');
    console.log(result.statuscode);
    if(result.statuscode === 200){
        data.push(result.data);
    }

    } catch(err) {
    console.log(err);
    reject(err);
    }
    console.log(result.data);
}

getFaceBookData();