const extension = ".com";
const domains = require ('./data.js');
const request = require('request');

for (let i = 0; i < domains.length; i++) {

  let url = "https://www." + domains[i] + extension;
  request(url, (err, res) => {
    if (err) {
      console.log(url + " => Error!", err);
    } else {
      console.log(url + " => OK!");
    }
    });

};