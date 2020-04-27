/*
    GetBilletlugenData()
    takes the subURL to all categoris from 
    from www.billetlugen.dk for the next 30 days
    collects the raw HTML data with a 2000ms delay
*/ 

const request = require('./WebRequest.js');       // Loads the module WebRequest.js
const header = require('./headers.js');  

function getData(subURL) {

    let index = 0;
       
    //console.log("1");
    let p = new Promise(async (resolve, reject) => {
        let data = [];
        for (index = 0; index < subURL.length; index++) {
            try {
                
                result = await request.webRequest(header.billetlugenHeader, 'www.billetlugen.dk', subURL[index]);
                console.log(result.statuscode);
                if(result.statuscode === 200){
                    data.push(result.data);
                }

                if(index + 1 !== subURL.length){ //skip last wait
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