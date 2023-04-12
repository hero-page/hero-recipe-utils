/* eslint-disable */ 


        const {filterByAllergens} = require("../functions/filterByAllergens"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for filterByAllergens function.
 */
function testFilterByAllergens() {
    // Initialize variables for counting passed and failed tests
    const name_of_function = "filterByAllergens";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    try {
        // Test case 1
        const recipes1 = [
            {id: 1, name: "Recipe1", ingredients: ["milk", "flour", "sugar"]},
            {id: 2, name: "Recipe2", ingredients: ["eggs", "vanilla", "flour"]}
        ];

        const allergens1 = ["milk"];

        const result1 = filterByAllergens(recipes1, allergens1);
        const expected1 = [{id: 2, name: "Recipe2", ingredients: ["eggs", "vanilla", "flour"]}];

        if (JSON.stringify(result1) === JSON.stringify(expected1)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    try {
        // Test case 2
        const recipes2 = [
            {id: 1, name: "Recipe1", ingredients: ["hazelnuts", "cocoa", "sugar"]},
            {id: 2, name: "Recipe2", ingredients: ["almonds", "raisins", "peanut oil"]}
        ];

        const allergens2 = ["peanut oil"];

        const result2 = filterByAllergens(recipes2, allergens2);
        const expected2 = [{id: 1, name: "Recipe1", ingredients: ["hazelnuts", "cocoa", "sugar"]}];

        if (JSON.stringify(result2) === JSON.stringify(expected2)) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Call addToReadme with the test results
    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testFilterByAllergens
};