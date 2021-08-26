// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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
   pilotStatus.innerHTML = `Pilot ${pilotValue} is ready for launch`;

   const copilotStatus = document.getElementById("copilotStatus");
   copilotStatus.innerHTML = `CoPilot ${copilotValue} is ready for launch`;

   const launchStatus = document.getElementById("launchStatus");
   
   if(fuelLevel < 10000) {
        launchStatus.innerHTML = 'Fuel level too low for launch';
        launchStatus.style.color  = "red";
   } else if(cargoLevel > 10000){
       launchStatus.innerHTML = "Shuttle not ready for launch";
       launchStatus.style.color  = "red";
   } else if(fuelLevel >= 10000 || cargoLevel <= 10000){
       launchStatus.innerHTML = "Shuttle is Ready for Launch"
       launchStatus.style.color  = "green";
   }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
