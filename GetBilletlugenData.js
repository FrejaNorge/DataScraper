/*
    GetBilletlugenData()

*/

const request = require('./WebRequest.js');       // Loads the module WebRequest.js

request('www.billetlugen.dk','/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=140&nurbuchbar=true&showFilter=yes&sort_by=event_name1&sort_direction=asc');

