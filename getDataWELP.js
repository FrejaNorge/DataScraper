/*
    getData()
*/

const fs = require('fs');
const request = require('./getBilletlugenDataWELP.js');
const eventInfo = require('./eventPrototype.js');


const getData = async () => {

    let stringHTML = await request.getBilletlugenData();
    
    //console.log(stringHTML);    // Skal vente på at getBilletlugenData har kørt sådan at jeg kan tilgå en streng med alt HTML data. (Den venter ikke på getBilletlugenData)

    let eventList = [];

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
        eventDateSearch = '<div>',
        dateEndSearch = '</div>',
        eventPriceSearch = 'class="price"',
        priceStartSearch = 'DKK',
        priceEndSearch = ',';

    let falseEventLength = falseEventSearch.length, //let for search words length
        linkStartLength = eventLinkSearch.length,
        nameStartLength = eventNameSearch.length,
        venueStartLength = venueStartSearch.length,
        locationStartLength = locationStartSearch.length,
        eventDateLength = eventDateSearch.length,
        priceStartLength = priceStartSearch.length,
        priceCustomLenght = 3;

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
        dateStartIndex = 0,
        dateEndIndex = 0,
        priceIndex = 0,
        priceStartIndex = 0,
        priceEndIndex = 0,
        eventCounter = 0;

    let timesToLoop = stringHTML.length;
    //console.log(stringHTML);

    for(let i = 0; i < timesToLoop; i++) {

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
                //console.log('link start:', linkstartIndex);
                //console.log('link end:', linkEndIndex);
                eventList[eventCounter].link = stringHTML[i].substr(linkstartIndex, linkEndIndex - linkstartIndex);
                //console.log(eventCounter);
                //console.log(eventList[eventCounter].link);

                //name
                nameStartIndex = stringHTML[i].indexOf(eventNameSearch, linkEndIndex);
                nameEndIndex = stringHTML[i].indexOf(nameEndSearch, nameStartIndex);

                //venue and location
                venueAndLocationStartIndex = stringHTML[i].indexOf(eventvenueAndLocationSearch, nameEndIndex);
                //venue
                venueStartIndex = stringHTML[i].indexOf(venueStartSearch, nameEndIndex);
                venueEndIndex = stringHTML[i].indexOf(venueEndSearch, venueStartIndex);

                //location
                locationStartIndex = stringHTML[i].indexOf(locationStartSearch, venueEndIndex);
                locationEndIndex = stringHTML[i].indexOf(locationEndSearch, locationStartIndex);

                //date
                dateStartIndex = stringHTML[i].indexOf(eventDateSearch, locationEndIndex);
                dateEndIndex = stringHTML[i].indexOf(dateEndSearch, dateStartIndex);

                //price
                priceIndex = stringHTML[i].indexOf(eventPriceSearch, dateEndIndex);
                priceStartIndex = stringHTML[i].indexOf(priceStartSearch, priceIndex);
                priceEndIndex = stringHTML[i].indexOf(priceEndSearch, priceStartIndex);

                //end properties
                lastEventIndex = priceEndIndex;
                existingEventIndex = stringHTML[i].indexOf(newEventSearch, lastEventIndex);
                eventCounter++;
            }
            lastEventIndex = 0;
        }
    }
    console.log(eventCounter);

    for(let j = 0; j < eventCounter; j++) {
        eventList[j].link
    }
};

getData();