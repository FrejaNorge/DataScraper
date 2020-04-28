/*
    getData()
    Calls webRequest() to get data from the given host
    and sub URLs. Then delay the requests 
    and push the HTML data to an array of strings and returns a promise
*/ 

const request = require('./WebRequest.js');       // Loads the module WebRequest.js
const header = require('./headers.js');  

function getData(header,hostName,subURL) {

    let index = 0;
       
    //console.log("1");
    let p = new Promise(async (resolve, reject) => {
        let data = [];
        for (index = 0; index < subURL.length; index++) {
            try {
                
                result = await request.webRequest(header, hostName, subURL[index]);
                console.log(result.statuscode);
                if(result.statuscode === 200) {
                    data.push(result.data);
                }

                if(index + 1 !== subURL.length) { //skip last wait
                    await delay(2000);
                    //console.log("waited");
                }
            } catch(err) {
                console.log(err);
                reject(err);
            }
            //console.log("2");
        };
        //console.log("3");
        resolve(data);
    });
    //console.log("4");
    return p;
};

function delay(ms){
    return new Promise((resolve) =>{
            setTimeout(resolve, ms);     
    });
}

module.exports = { 
    getData, 
}