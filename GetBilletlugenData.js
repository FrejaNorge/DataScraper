/*
    GetBilletlugenData()

*/

const request = require('./WebRequest.js');       // Loads the module WebRequest.js

let subURL = [
    '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=140&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Musik
    '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=141&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Sport
    '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=142&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Musical & Teater 
    '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=164&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Familie
    '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=165&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Comedy
    '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=166&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc'   // Kultur
];

request(billetlugenHeader,'www.billetlugen.dk',subURL[2]);