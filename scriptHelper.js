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
  document.getElementById("missionTarget").innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
  `;
}

function validateInput(testInput) {
   
    if(!testInput){
    return "Empty";
   }

   num = Number(testInput);
   
   if(isNaN(num)){
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // Validation for Pilot and Copilot
    if(validateInput(pilot).includes("Empty") || validateInput(copilot).includes("Empty") || validateInput(fuelLevel).includes("Empty") || validateInput(cargoLevel).includes("Empty")) {
        alert("All Fields are Required!");
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Not Ready`;
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} Not Ready`;
    } else if (!(validateInput(pilot).includes("Not a Number")) || !(validateInput(copilot).includes("Not a Number")) || !(validateInput(fuelLevel).includes("Is a Number")) || !(validateInput(cargoLevel).includes("Is a Number"))){
        alert("Data Entry is not valid");
    } else {
        if(Number(fuelLevel) < 10000 || Number(cargoLevel) > 10000){//Validation for Fuel and Cargo Levels
            if(Number(fuelLevel) < 10000){
                document.getElementById("fuelStatus").innerHTML = "Not Enough Fuel!!";
            } else {
                document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
            }

            if(Number(cargoLevel) > 10000){
                document.getElementById("cargoStatus").innerHTML = "Too much cargo for shuttle to take off";
            } else {
                document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            }
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Not Ready`;
            document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot} Not Ready`;
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("faultyItems").style.visibility = 'visible';
        } else {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
            document.getElementById("launchStatus").style.color = "green";
        } 
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
    let num = Math.floor(Math.random() * planets.length);

    return planets[num];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;