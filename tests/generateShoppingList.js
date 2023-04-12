/* eslint-disable */ 


        const {generateShoppingList} = require("../functions/generateShoppingList"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test function for the generateShoppingList function.
 */
function testGenerateShoppingList() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "generateShoppingList";

    const recipes = [
        {
            name: "Pizza",
            ingredients: [
                { name: "Flour", quantity: 500, unit: "grams" },
                { name: "Salt", quantity: 10, unit: "grams" },
            ],
        },
        {
            name: "Bread",
            ingredients: [
                { name: "Flour", quantity: 1, unit: "pound" },
                { name: "Salt", quantity: 0.5, unit: "ounce" },
            ],
        }
    ];

    const threshold = 0.8;

    try {
        const result = generateShoppingList(recipes, threshold);
        const expectedResult = [
            { name: "Flour", quantity: 951.7, unit: "grams" },
            { name: "Salt", quantity: 24.1, unit: "grams" },
        ];

        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
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
    testGenerateShoppingList
};