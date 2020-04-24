/*
    getData()
*/

const fs = require('fs');
const request = require('./getBilletlugenDataWELP.js');


const getData = async () => {

    let stringHTML = await request.getBilletlugenData();
    
    //console.log(stringHTML);    // Skal vente på at getBilletlugenData har kørt sådan at jeg kan tilgå en streng med alt HTML data. (Den venter ikke på getBilletlugenData)

    let eventInfo = {"link": '', "name": '', "location": '', "place": '', "date": '', "time": '', "price": '', "description": ''},
        eventList = [];

    let falseEventSearch = '<h4>Spec', //let for searchs words
        newEventSearch = '<h4>',
        eventLinkSearch = '<a href="',
        linkEndSearch = '"',
        eventNameSearch = 'title="',
        nameEndSearch = 'name="',
        eventPlaceAndLocationSearch = 'class="place"',
        placeStartSearch = '<dt>',
        placeEndSearch = '</dt>',
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
        placeStartLength = placeStartSearch.length,
        locationStartLength = locationStartSearch.length,
        eventDateLength = eventDateSearch.length,
        priceStartLength = priceStartSearch.length,
        priceCustomLenght = 3;

    let existingEventIndex = 0, //let for index places
        lastEventIndex = 0,
        linkstartIndex = 0,
        linkEndIndex = 0,
        nameStartIndex = 0,
        nameEndIndex = 0,
        placeAndLocationStartIndex = 0,
        placeStartIndex = 0,
        placeEndIndex = 0,
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
            console.log('eventTest', existingEventIndex);

            while ((existingEventIndex !== -1) && (lastEventIndex !== -1)) {
                //link
                linkstartIndex = stringHTML[i].indexOf(eventLinkSearch, lastEventIndex) + linkStartLength;
                linkEndIndex = stringHTML[i].indexOf(linkEndSearch, linkstartIndex + linkStartLength);
                console.log('link start:', linkstartIndex);
                console.log('link end:', linkEndIndex);
                eventList[eventCounter] = stringHTML[i].substr(linkstartIndex, linkEndIndex - linkstartIndex);
                //console.log(eventList[eventCounter]);

                //name
                nameStartIndex = stringHTML[i].indexOf(eventNameSearch, linkEndIndex);
                nameEndIndex = stringHTML[i].indexOf(nameEndSearch, nameStartIndex);

                //place and location
                placeAndLocationStartIndex = stringHTML[i].indexOf(eventPlaceAndLocationSearch, nameEndIndex);
                //place
                placeStartIndex = stringHTML[i].indexOf(placeStartSearch, nameEndIndex);
                placeEndIndex = stringHTML[i].indexOf(placeEndSearch, placeStartIndex);

                //location
                locationStartIndex = stringHTML[i].indexOf(locationStartSearch, placeEndIndex);
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
};

getData();