// Write your JavaScript code here!


window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   let form = document.querySelector("form");
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";

   form.addEventListener("submit", function(event){
        event.preventDefault();

        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelInput = document.querySelector("input[name=fuelLevel]");
        let cargoInput = document.querySelector("input[name=cargoMass]");

        const pilotValue = pilotInput.value;
        const copilotValue = copilotInput.value;
        const fuelValue = fuelInput.value;
        const cargoValue = cargoInput.value;


        formSubmission(document, list, pilotValue, copilotValue, fuelValue, cargoValue);
   });

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   });
   
});