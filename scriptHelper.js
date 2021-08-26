// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = 
   
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}>`
   
}

function validateInput(testInput) {
   if (testInput === ""){
       return "Empty";
   } else if (isNaN(testInput) === true){
       return "Not a Number";
   } else {
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ) {
       alert("Please fill out all the fields")
   } else if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number"){
       alert("Please enter a valid input")
   }
//    document.getElementById("list").style.visibility = "visible";
    list.style.visibility = "visible";

   const pilotStatus = document.getElementById("pilotStatus");
   pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

   const copilotStatus = document.getElementById("copilotStatus");
   copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

   const launchStatus = document.getElementById("launchStatus");
   
   if(fuelLevel >= 10000 || cargoLevel <= 10000){
    launchStatus.innerHTML = "Shuttle is Ready for Launch"
    launchStatus.style.color  = "green";
    }

   if(fuelLevel < 10000) {
        launchStatus.innerHTML = 'Shuttle not ready for launch';
        launchStatus.style.color  = "red";
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
   } 
   if(cargoLevel > 10000){
       launchStatus.innerHTML = "Shuttle not ready for launch";
       launchStatus.style.color  = "red";
       document.getElementById("cargoStatus").innerHTML = `Cargo level too high for launch`;
   } 
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    randomPlanet = planets[Math.floor(Math.random()*planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
