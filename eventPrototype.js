/*
    Event prototype
*/

function Event(link, name, location, venue, date, time, price, description) {
  
    this.link = link;
    this.name = name;
    this.location = location;
    this.venue = venue;
    this.date = date;
    this.time = time;
    this.price = price;
    this.description = description;
};

module.exports = Event;