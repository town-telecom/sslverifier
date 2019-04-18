const extension = ".com";
const domains = require ('./data.js');
const request = require('request');
const verifyDomains = (arr) => {

  arr.map(domain => {

    let url = "https://www." + domain + extension;
    request(url, (err, res) => {
      if (err) {
        console.log(url + " => Error!", err);
      } else {
        console.log(url + " => OK!");
      }
    });

  });

};

verifyDomains(domains);

