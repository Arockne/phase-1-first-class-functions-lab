//implement returnFirstTwoDrivers as an expression
  //passed in an array of drivers
  //returns the first two drivers in the array
//i
  //array of drivers
//o
  //array of the first two drivers
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

//implement returnLastTwoDrivers as an expression
  //passed in an array of drivers
  //returns array with last two drivers
//i
  //array of drivers
//o
  //array of the last two drivers
const returnLastTwoDrivers = drivers => drivers.slice(-2);

//assign selectingDrivers to an array
  //returnFirstTwoDrivers
  //returnLastTwoDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//implement createFareMultiplier function
  //passed in an integar which is the multiplier
  //returns a function
    //multiplies a fare for a ride correcting
//i
  //integar for a multiplier
//o
  //function that multiplies a fare for the ride
/*
  This function will take in an integar as an argument and will save that environment where the integar is locked in and use that as a multiplier for the fare being passed in through the inner function
*/

const createFareMultiplier = multiplier => {
  return (fare) => fare * multiplier;
}

//implement fareDoubler function
  //returns createFareMultiplier with an argument of 2
const fareDoubler = (fare) => createFareMultiplier(2)(fare);

//implement fareTriplie
const fareTripler = fare => createFareMultiplier(3)(fare);

//implement selectDifferentDrivers function
  //takes two arguments
    //array of drivers
    //either the returnFirstTwoDrivers or returnLastTwoDrivers
  //return either the first two drivers or last two drivers
const selectDifferentDrivers = (drivers, selectedDrivers) => selectedDrivers(drivers);