// Write your JavaScript code here!
var allPlanets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

const userWeightInputElement = document.getElementById('user-weight');

const planetNameSelectElement = document.getElementById("planets");

const outputElement = document.getElementById('output');

allPlanets.forEach( (planetData) => {
    const name = planetData[0];
    const option = document.createElement('option')
    option.innerText = name;
    option.value = name;
    planetNameSelectElement.appendChild(option)
});

/**
 * return user's new weight on given planet
 * @param {string} weight - user's weight
 * @param {string} planetName 
 */
function calculateWeight(weight, planetName) {
    // convert weight from string to number, using new variable
    const userWeight = Number(weight);
    const [pName, pModifier] = allPlanets.find( (planetArray) => {
        return planetArray[0] === planetName;
    });
    return userWeight * pModifier;
};  

function handleClickEvent(e) {
    var userWeight = userWeightInputElement.value;
    var planetName = planetNameSelectElement.value;
    // console.log('userWeight', userWeight, typeof userWeight);
    // console.log('planetName', planetName);
    var result = calculateWeight(userWeight, planetName);
    // console.log('result', result);
    outputElement.innerText = 'If you were on ' + planetName + ', you would weigh ' + result + 'lbs!';
    
};


 /* given a user's weight(on Earth) and mass of a planet, multiply
 their weight by the mass to return their weight on any given planet
 */

 /** TASKS
  * 1. need to make planetNames = the 2nd value in their prospective array (needs to equal the mass)
  * 2. 
  * 
  */
