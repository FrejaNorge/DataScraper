/*
    GetBilletlugenData()
    takes the subURL to all categoris from 
    from www.billetlugen.dk for the next 30 days
    collects the raw HTML data with a 2000ms delay
*/ 
const request = require('./WebRequest.js');       // Loads the module WebRequest.js

let footerSearch = '<ul class="footerPager"',
    nextDisabledSearch = '<li class="next arrowdisabled">',
    nextSearch = '<li class="next">',
    nextHrefSearch = '<a href="',
    endNextHrefSearch = '"',
    startLinkString = '/billetter.html',    
    link = '',
    result = '',
    accualLink = '';

let indexPoint = 0,
    indexPointNext = 0,
    indexPointStart = 0,
    indexPointEnd = 0,
    startIndexLink = 0,
    linkLenght = 0,
    counter = 0;

let index = 0,
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

                console.log(result);
            } catch(err) {
                console.log(err);
            }

        }, 2000 * (index + counter));

    })(index);
        
    do {    

        indexPoint = result.indexOf(footerSearch);
        if (indexPoint !== -1) {

            indexPointDisabled = result.indexOf(nextDisabledSearch)
            if (indexPointDisabled === -1) {

                indexPointNext = result.indexOf(nextSearch, indexPoint);
                indexPointStart = result.indexOf(nextHrefSearch, indexPointNext);
                indexPointEnd = result.indexOf(endNextHrefSearch, indexPointStart + nextHrefSearch.lenght);

                startIndexLink = indexPointStart + nextHrefSearch.lenght;
                linkLenght = indexPointEnd - startIndexLink;
                link = result.substr(startIndexLink, linkLenght);

                counter++;
            }
        }

        accualLink.concat(startLinkString, link);

        setTimeout(async function() {
            try {
                result = await request.WebRequestSecure(billetlugenHeader, 'www.billetlugen.dk', accualLink);

                console.log(result);
            } catch(err) {
                console.log(err);
            }

        }, 2000 * (index + counter));

    } while ((indexPoint !== -1) && (indexPointDisabled !== -1));
}