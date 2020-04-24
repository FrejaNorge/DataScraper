/*
    GetBilletlugenData()
    takes the subURL to all categoris from 
    from www.billetlugen.dk for the next 30 days
    collects the raw HTML data with a 2000ms delay
*/ 

const request = require('./WebRequest.js');       // Loads the module WebRequest.js
const billetlugenHeader = require('./headers.js');  
const fs = require('fs');


function getBilletlugenData() {

    let index = 0,
        subURL = [
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=140&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Musik
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=141&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Sport
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=142&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Musical & Teater 
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=164&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Familie
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=165&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Comedy
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=166&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc'   // Kultur
        ];
    //console.log("1");
    let p = new Promise(async (resolve, reject) => {
        let data = [];
        for (index = 0; index < subURL.length; index++) {
            try {
                
                result = await request.WebRequestSecure(billetlugenHeader, 'www.billetlugen.dk', subURL[index]);
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
    getBilletlugenData, 
}
