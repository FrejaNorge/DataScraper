/*

*/
const fs = require('fs');
const billetlugenData = require('./getBilletlugenData.js');

async function runOrder() {

    billetlugenData();
    //facebookData();
    /* lave en rækkefølge på kørsel og vente tid */
    getData();

};



async function getData(string) {
    
    fs.readFile('event.json', 'utf8', (err, jsonFile) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        //console.log('File data:', jsonString) 

        let stringOfHTML = JSON.stringify(jsonFile);


/*        
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


        existingEventIndex = stringOfHTML.indexOf(newEventSearch, lastEventIndex);
        console.log(existingEventIndex);
        //console.log(stringOfHTML);

        while (existingEventIndex !== -1) {

            linkstartIndex = result.indexOf(eventLinkSearch, existingEventIndex);
            linkEndIndex = result.indexOf(linkEndSearch, linkstartIndex);

            eventInfo.link = result.substr((linkstartIndex + eventLinkSearch.lenght), (linkEndIndex - (linkstartIndex - eventLinkSearch.lenght)));
            console.log(linkstartIndex);
            console.log(linkEndIndex);
            console.log(eventInfo.link);

        }
*/       
    })
};

getData();