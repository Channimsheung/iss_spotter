// const fetchMyIP = require("./iss");
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// index.js

// The code below is temporary and can be commented out.

const {
  fetchCoordsByIP,
  fetchMyIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
} = require("./iss");

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
});

// index.js

// The code below is temporary and can be commented out.

fetchCoordsByIP("162.245.144.188", (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned Coords:", coords);
});

const exampleCoords = { latitude: "49.27670", longitude: "-123.13000" };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned flyover times:", passTimes);
});

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});
