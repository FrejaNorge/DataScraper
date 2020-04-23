/*
    getData()
*/

const fs = require('fs');
const request = require('./getBilletlugenDataWELP.js');


const getData = async () => {

    const dataString = await request.getBilletlugenData();
    
    console.log('test',dataString);    // Skal vente på at getBilletlugenData har kørt sådan at jeg kan tilgå en streng med alt HTML data. (Den venter ikke på getBilletlugenData)
  
};

getData();