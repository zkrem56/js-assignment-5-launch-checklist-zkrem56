// Write your JavaScript code here!

window.addEventListener("load", function() {

    let form = document.getElementById("launchForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let formData = document.querySelectorAll("input[type=text]");
        let pilotName = formData[0].value;
        let copilotName = formData[1].value;
        let fuellevel = formData[2].value;
        let cargoMass = formData[3].value;

        formSubmission(document, formData, pilotName, copilotName, fuellevel, cargoMass);


    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });