/*

*/



async function getData(string) {

    const fs = require('fs');
    const billetlugenData = require('./getBilletlugenData.js'); 
      
    await billetlugenData();



    fs.readFile('DataScraper/event.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            return
        }
        console.log('File data:', jsonString) 
    })
    
/*
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
};

getData();