/* eslint-disable */ 


        const {convertUnits} = require("../functions/convertUnits"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for convertUnits.
 */
function testConvertUnits() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "convertUnits";

    // Test case 1: Convert 1 cup to grams
    try {
        const result = convertUnits(1, "cup", "grams");
        if (result === 201.6) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test case 2: Convert 2 tablespoons to teaspoons
    try {
        const result = convertUnits(2, "tablespoon", "teaspoons");
        if (result === 6) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test case 3: Convert 1/2 cup to ounces (decimal input)
    try {
        const result = convertUnits(0.5, "cup", "ounces");
        if (result === 4) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test case 4: Convert 30 grams to ounces
    try {
        const result = convertUnits(30, "grams", "ounces");
        if (result === 1.06) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test case 5: Convert 3.5 ounces to tablespoons
    try {
        const result = convertUnits(3.5, "ounces", "tablespoons");
        if (result === 7) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testConvertUnits
};