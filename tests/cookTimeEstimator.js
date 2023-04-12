/* eslint-disable */ 


        const {cookTimeEstimator} = require("../functions/cookTimeEstimator"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test cookTimeEstimator function to validate its functionality with ingredients, quantities, and edge cases.
 */
function testCookTimeEstimator() {
    const name_of_function = "cookTimeEstimator";
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;

    // Test case 1: Standard input
    try {
        const testCase1 = cookTimeEstimator([{name: "carrot", quantity: 3}, {name: "pasta", quantity: 200}]);
        if (testCase1 === 15) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 2: Negative quantity
    try {
        const testCase2 = cookTimeEstimator([{name: "carrot", quantity: -3}, {name: "pasta", quantity: 200}]);
        if (testCase2 === 10) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 3: Ingredient without default cook time
    try {
        const testCase3 = cookTimeEstimator([{name: "broccoli", quantity: 2}, {name: "pasta", quantity: 200}]);
        if (testCase3 === 10) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 4: Empty ingredients array
    try {
        const testCase4 = cookTimeEstimator([]);
        if (testCase4 === 0) {
            number_of_tests_passed++;
        } else {
            number_of_tests_failed++;
        }
    } catch (err) {
        number_of_tests_failed++;
    }

    // Test case 5: Large quantity
    try {
        const testCase5 = cookTimeEstimator([{name: "carrot", quantity: 1000}, {name: "pasta", quantity: 200}]);
        if (testCase5 === 1010) {
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
    testCookTimeEstimator
};