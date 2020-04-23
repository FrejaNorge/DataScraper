/*

*/
const fs = require('fs');
//const billetlugenData = require('./getBilletlugenData.js');
/*
async function runOrder() {

    billetlugenData();
    //facebookData();

    getData();

};
*/


async function getData(string) {
    
    fs.readFile('event.json', 'utf8', (err, jsonFile) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        //console.log('File data:', jsonString) 

        let stringOfHTML = JSON.stringify(jsonFile);


        
        let eventInfo = {"link": '', "name": '', "location": '', "place": '', "date": '', "time": '', "price": ''},
            eventList = [];

        let falseEventSearch = '<h4>Spec',
            newEventSearch = '<h4>', //let for searchs words
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

        let falseEventLength = falseEventSearch.length,
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
            priceEndIndex = 0;


        skipindex = jsonFile.indexOf(falseEventSearch, lastEventIndex) + falseEventLength;
        
        existingEventIndex = jsonFile.indexOf(newEventSearch, skipindex);
        lastEventIndex = existingEventIndex;
        console.log(existingEventIndex);

        while ((existingEventIndex !== -1) && (lastEventIndex !== -1)) {

            //link
            linkstartIndex = jsonFile.indexOf(eventLinkSearch, lastEventIndex);
            linkEndIndex = jsonFile.indexOf(linkEndSearch, linkstartIndex + linkStartLength);
            console.log(linkstartIndex);
            console.log(linkEndIndex);

            //name
            nameStartIndex = jsonFile.indexOf(eventNameSearch, linkEndIndex);
            nameEndIndex = jsonFile.indexOf(nameEndSearch, nameStartIndex);

            //place and location
            placeAndLocationStartIndex = jsonFile.indexOf(eventPlaceAndLocationSearch, nameEndIndex);
            //place
            placeStartIndex = jsonFile.indexOf(placeStartSearch, nameEndIndex);
            placeEndIndex = jsonFile.indexOf(placeEndSearch, placeStartIndex);

            //location
            locationStartIndex = jsonFile.indexOf(locationStartSearch, placeEndIndex);
            locationEndIndex = jsonFile.indexOf(locationEndSearch, locationStartIndex);

            //date
            dateStartIndex = jsonFile.indexOf(eventDateSearch, locationEndIndex);
            dateEndIndex = jsonFile.indexOf(dateEndSearch, dateStartIndex);

            //price
            priceIndex = jsonFile.indexOf(eventPriceSearch, dateEndIndex);
            priceStartIndex = jsonFile.indexOf(priceStartSearch, priceIndex);
            priceEndIndex = jsonFile.indexOf(priceEndSearch, priceStartIndex);

            lastEventIndex = priceEndIndex;

            existingEventIndex = jsonFile.indexOf(newEventSearch, lastEventIndex);
        }
       
    })
};

getData();