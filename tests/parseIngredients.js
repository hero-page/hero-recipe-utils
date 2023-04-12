/* eslint-disable */ 


        const {parseIngredients} = require("../functions/parseIngredients"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for parseIngredients.
 */
function testParseIngredients() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "parseIngredients";

    try {
        const result = parseIngredients("1 cup sugar");
        if (result.quantity === 1 && result.unit === "cup" && result.name === "sugar") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = parseIngredients("2 tablespoons olive oil");
        if (result.quantity === 2 && result.unit === "tablespoons" && result.name === "olive oil") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        const result = parseIngredients("1/2 teaspoon salt");
        if (result.quantity === 0.5 && result.unit === "teaspoon" && result.name === "salt") {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testParseIngredients
};