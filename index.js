const nameslist = require("../country/state/city/index.js");

const getFirstNames = require("../utilities/utils/index.js");

let getPeopleInCity = function () {
  let resultArray = getFirstNames(nameslist);
  return resultArray;
};

module.exports = getPeopleInCity;
