/*
    GetBilletlugenData()
    takes the subURL to all categoris from 
    from www.billetlugen.dk for the next 30 days
    collects the raw HTML data with a 2000ms delay
*/ 

async function getBilletlugenData() {

    const request = require('./WebRequest.js');       // Loads the module WebRequest.js
    const billetlugenHeader = require('./headers.js');  
    const fs = require('fs');

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
                                        
                    fs.writeFile("DataScraper/event.json", result.data, 'utf8', function(err) {
                    });
                    //console.log(result.data); // Debug
                } catch(err) {
                    console.log(err);
                }

            }, 2000 * index);
            
        })(index);
    }
}; 

// getBilletlugenData();    // Debug

module.exports = getBilletlugenData;


/*
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
    */





/*


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
}
    accualLink.concat(startLinkString, link);

    setTimeout(async function() {
        try {
            result = await request.WebRequestSecure(billetlugenHeader, 'www.billetlugen.dk', accualLink);

            //console.log(result);
        } catch(err) {
            console.log(err);
        }


while ((indexPoint !== -1) && (indexPointDisabled !== -1));

let eventInfo = {"link": '', "name": '', "location": '', "place": '', "date": '', "time": '', "price": ''},
    eventList = [];

let newEventSearch = '<h4>', //let for searchs words
    eventLinkSearch = '<a href="',
    linkEndSearch = '" title=',
    eventNameSearch = 'title="',
    nameEndSearch = 'name="',
    eventLocationSearch = 'class="place"',
    placeStartSearch = '<dt>',
    placeEndSearch = '</dt>',
    locationStartSearch = '<span>',
    locationEndSearch = '</span>',
    eventDateSearch = '<div>',
    timeEndSearch = '</div>',
    eventPriceSearch = 'class="price"',
    priceStartSearch = 'DKK',
    priceEndSearch = ',';

let stfu = 'stfu'; //let for lenghts

let existingEventIndex = 0, //let for index places
    lastEventIndex = 0,
    linkstartIndex = 0,
    linkEndIndex = 0,
    nameStartIndex = 0,
    nameEndIndex = 0,
    placeStartIndex = 0,
    placeEndIndex = 0,
    locationStartIndex = 0,
    locationEndIndex = 0,
    dateStartIndex = 0,
    dateEndIndex = 0,
    priceStartIndex = 0,
    priceEndIndex = 0;


existingEventIndex = result.indexOf(newEventSearch, lastEventIndex);
console.log(existingEventIndex);
console.log(result);

while (existingEventIndex !== -1) {

    linkstartIndex = result.indexOf(eventLinkSearch, existingEventIndex);
    linkEndIndex = result.indexOf(linkEndSearch, linkstartIndex);

    eventInfo.link = result.substr((linkstartIndex + eventLinkSearch.lenght), (linkEndIndex - (linkstartIndex - eventLinkSearch.lenght)));
    console.log(linkstartIndex);
    console.log(linkEndIndex);
    console.log(eventInfo.link);

}

*/