/*
    GetFaceBookData()

*/

const request = require('./webRequest.js');       // Loads the module WebRequest.js

async function getFaceBookData() {

    let data = [];

try {
                
    result = await request.webRequest(header.facebookHeader, 'www.facebook.com', '/events/discovery/?acontext=%7B');
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

getFacebookData();