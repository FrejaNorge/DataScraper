/*
    GetBilletlugenData()
    takes the subURL to all categoris from 
    from www.billetlugen.dk for the next 30 days
    collects the raw HTML data with a 2000ms delay
*/ 

const request = require('./WebRequest.js');       // Loads the module WebRequest.js
const billetlugenHeader = require('./headers.js');  
const fs = require('fs');


async function getBilletlugenData() {

    let dataString = "";
        index = 0,
        subURL = [
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=140&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Musik
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=141&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Sport
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=142&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Musical & Teater 
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=164&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Familie
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=165&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Comedy
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=166&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc'   // Kultur
    ];

    for (index = 0; index <= subURL.length; index++) {

        (function(index) {

            setTimeout(async function() {
                try {
                    result = await request.WebRequestSecure(billetlugenHeader, 'www.billetlugen.dk', subURL[index]);

                    dataString = result.data;   // Skal gemme data i dataString og returnere strengen som et promise, sådan at jeg kan bruge den async i getDataWELP.js

                } catch(err) {
                    console.log(err);
                }

            }, 2000 * index);
        
        })(index);
    };
    return dataString;
};

module.exports = { 
                getBilletlugenData, 
}
