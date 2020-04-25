/*
    getData()
*/

const fs = require('fs');
const request = require('./getBilletlugenDataWELP.js');
const eventInfo = require('./eventPrototype.js');


const getData = async () => {

    let subURL = [
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=140&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Musik
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=141&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Sport
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=142&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Musical & Teater 
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=164&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Familie
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=165&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc',  // Comedy
        '/billetter.html?affiliate=DKA&doc=category&fun=kategorieliste&detailadoc=erdetaila&detailbdoc=evdetailb&hkId=166&index=0&nextDays=30&nurbuchbar=true&showFilter=yes&sort_by=name&sort_direction=asc'   // Kultur
        ];

    let stringHTML = await request.getBilletlugenData(subURL);
    
    //console.log(stringHTML);    // Skal vente på at getBilletlugenData har kørt sådan at jeg kan tilgå en streng med alt HTML data. (Den venter ikke på getBilletlugenData)

    let eventList = [];
        eventLinks = [];

    let falseEventSearch = '<h4>Spec', //let for searchs words
        newEventSearch = '<h4>',
        eventLinkSearch = '<a href="',
        linkEndSearch = '"',
        eventNameSearch = 'title="',
        nameEndSearch = 'name="',
        eventvenueAndLocationSearch = 'class="place"',
        venueStartSearch = '<dt>',
        venueEndSearch = '</dt>',
        locationStartSearch = '<span>',
        locationEndSearch = '</span>',
        eventDateAndTimeSearch = '<div>',
        dateMiddleSearch = '/',
        dateEndSearch = '</div>',
        eventPriceSearch = 'class="price"',
        priceStartSearch = 'DKK',
        priceEndSearch = ',',
        imageStartSearch = '<img src="/',
        imageEndSearch = '"',
        extraString;

    let falseEventLength = falseEventSearch.length, //let for search words length
        linkStartLength = eventLinkSearch.length,
        nameStartLength = eventNameSearch.length,
        venueStartLength = venueStartSearch.length,
        locationStartLength = locationStartSearch.length,
        dateAndTimeStartLength = eventDateAndTimeSearch.length,
        imageStartLength = imageStartSearch.length,
        customLengthForName = 17;

    let existingEventIndex = 0, //let for index venues
        lastEventIndex = 0,
        linkstartIndex = 0,
        linkEndIndex = 0,
        nameStartIndex = 0,
        nameEndIndex = 0,
        venueAndLocationStartIndex = 0,
        venueStartIndex = 0,
        venueEndIndex = 0,
        locationStartIndex = 0,
        locationEndIndex = 0,
        dateAndTimeStartIndex = 0,
        dateMiddleIndex,
        dateEndIndex = 0,
        priceIndex = 0,
        priceStartIndex = 0,
        priceEndIndex = 0,
        imageStartIndex = 0,
        imageEndIndex = 0,
        eventCounter = 0;

    //console.log(stringHTML);

    for(let i = 0; i < stringHTML.length; i++) {

        if(stringHTML[i] !== undefined) {
            skipindex = stringHTML[i].indexOf(falseEventSearch, lastEventIndex) + falseEventLength;
        
            existingEventIndex = stringHTML[i].indexOf(newEventSearch, skipindex);
            lastEventIndex = existingEventIndex;
            //console.log('eventTest', existingEventIndex);

            while ((existingEventIndex !== -1) && (lastEventIndex !== -1)) {
                eventList[eventCounter] = new eventInfo();
                //link
                linkstartIndex = stringHTML[i].indexOf(eventLinkSearch, existingEventIndex) + linkStartLength;
                linkEndIndex = stringHTML[i].indexOf(linkEndSearch, linkstartIndex + linkStartLength);

                eventList[eventCounter].link = stringHTML[i].substr(linkstartIndex, linkEndIndex - linkstartIndex);
                //console.log(eventList[eventCounter].link);

                //name
                nameStartIndex = stringHTML[i].indexOf(eventNameSearch, linkEndIndex) + nameStartLength;
                nameEndIndex = stringHTML[i].indexOf(nameEndSearch, nameStartIndex);

                eventList[eventCounter].name = stringHTML[i].substr(nameStartIndex, nameEndIndex - (nameStartIndex + customLengthForName));
                //console.log(eventList[eventCounter].name);

                //venue and location
                venueAndLocationStartIndex = stringHTML[i].indexOf(eventvenueAndLocationSearch, nameEndIndex);
                //venue
                venueStartIndex = stringHTML[i].indexOf(venueStartSearch, venueAndLocationStartIndex) + venueStartLength;
                venueEndIndex = stringHTML[i].indexOf(venueEndSearch, venueStartIndex);

                eventList[eventCounter].venue = stringHTML[i].substr(venueStartIndex, venueEndIndex - venueStartIndex);
                //console.log(eventList[eventCounter].venue);

                //location
                locationStartIndex = stringHTML[i].indexOf(locationStartSearch, venueEndIndex) + locationStartLength;
                locationEndIndex = stringHTML[i].indexOf(locationEndSearch, locationStartIndex);

                eventList[eventCounter].location = stringHTML[i].substr(locationStartIndex, locationEndIndex - locationStartIndex);
                //console.log(eventList[eventCounter].location);

                //date and time
                dateAndTimeStartIndex = stringHTML[i].indexOf(eventDateAndTimeSearch, locationEndIndex) + dateAndTimeStartLength;
                dateMiddleIndex = stringHTML[i].indexOf(dateMiddleSearch, dateAndTimeStartIndex);
                dateEndIndex = stringHTML[i].indexOf(dateEndSearch, dateMiddleIndex);

                eventList[eventCounter].date = stringHTML[i].substr(dateMiddleIndex - 9, 8);
                eventList[eventCounter].time = stringHTML[i].substr(dateMiddleIndex + 2, 5);
                //console.log(eventList[eventCounter].date);
                //console.log(eventList[eventCounter].time);


                //price
                priceIndex = stringHTML[i].indexOf(eventPriceSearch, dateEndIndex);
                priceStartIndex = stringHTML[i].indexOf(priceStartSearch, priceIndex) + 4;
                priceEndIndex = stringHTML[i].indexOf(priceEndSearch, priceStartIndex) + 3;

                eventList[eventCounter].price = stringHTML[i].substr(priceStartIndex, priceEndIndex - priceStartIndex);
                //console.log(eventList[eventCounter].price);

                //image link
                imageStartIndex = stringHTML[i].indexOf(imageStartSearch, priceEndIndex) + imageStartLength;
                imageEndIndex = stringHTML[i].indexOf(imageEndSearch, imageStartIndex + imageStartLength);

                eventList[eventCounter].imageLink = stringHTML[i].substr(imageStartIndex, imageEndIndex - imageStartIndex);
                //console.log(eventList[eventCounter].imageLink);

                //end properties
                lastEventIndex = priceEndIndex;
                existingEventIndex = stringHTML[i].indexOf(newEventSearch, lastEventIndex);
                eventCounter++;
            }
            lastEventIndex = 0;
        }
    }

    console.log(eventCounter);

    for(i = 0; i < eventCounter; i++) {
        extraString = '/';
        eventLinks[i] = extraString.concat(eventList[i].link);

        eventLinks[i] = eventLinks[i].replace(/;/g, '&');
        //console.log(eventLinks[i]);
    }
/*
    let descriptionHTML = await request.getBilletlugenData(eventLinks);
    //console.log(descriptionHTML[0]);

    let descriptionStartSearch = '',
        descriptionEndSearch = '';

    let descriptionStartlength = descriptionStartSearch.length;

    let descriptionStartIndex = 0,
        descriptionEndIndex = 0;

    for(i = 0; i < eventCounter; i++) {

        if(descriptionHTML[i] !== undefined) {

            //lav noget kode som kan finde beskrivelsen :)
        }
    }
*/
};

getData();