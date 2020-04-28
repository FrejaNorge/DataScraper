/*
    Event prototype
*/

function EventInfo(link, name, location, venue, date, time, price, description, imageLink) {

    this.link = link;
    this.name = name;
    this.location = location;
    this.venue = venue;
    this.date = date;
    this.time = time;
    this.price = price;
    this.description = description;
    this.imageLink = imageLink;
};

module.exports = EventInfo;