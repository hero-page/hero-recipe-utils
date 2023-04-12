/* eslint-disable */ 


        const {scaleIngredients} = require("../functions/scaleIngredients"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for scaleIngredients function
 */
function testScaleIngredients() {
    let numberOfTestsPassed = 0;
    let numberOfTestsFailed = 0;
    const nameOfFunction = "scaleIngredients";

    try {
        const ingredients = [
            { name: 'flour', quantity: 1, unit: 'cup' },
            { name: 'sugar', quantity: 0.5, unit: 'cup' },
        ];
        const newServings = 2;
        const expectedResult = [
            { name: 'flour', quantity: 2, unit: 'cup' },
            { name: 'sugar', quantity: 1, unit: 'cup' },
        ];
        
        const result = scaleIngredients(ingredients, newServings);
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            numberOfTestsPassed++;
        } else {
            numberOfTestsFailed++;
        }
    } catch (err) {
        numberOfTestsFailed++;
    }

    try {
        const ingredients = [
            { name: 'egg', quantity: 1, unit: 'piece' },
        ];
        const newServings = 0;
        scaleIngredients(ingredients, newServings);
        numberOfTestsFailed++; // should not reach here due to Error thrown
    } catch (err) {
        numberOfTestsPassed++;
    }

    try {
        const ingredients = [
            { name: 'water', quantity: -1, unit: 'ml' },
        ];
        const newServings = 2;
        scaleIngredients(ingredients, newServings);
        numberOfTestsFailed++; // should not reach here due to Error thrown
    } catch (err) {
        numberOfTestsPassed++;
    }

    try {
        const ingredients = [
            { name: 'chocolate', unit: 'gram' },
        ];
        const newServings = 2;
        scaleIngredients(ingredients, newServings);
        numberOfTestsFailed++; // should not reach here due to Error thrown
    } catch (err) {
        numberOfTestsPassed++;
    }

    addToReadme(generateTestBadge(nameOfFunction, numberOfTestsPassed, numberOfTestsFailed));
}

module.exports = {
    testScaleIngredients
};