/* eslint-disable */ 


        const {recommendSimilarRecipes} = require("../functions/recommendSimilarRecipes"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Tests the recommendSimilarRecipes function for valid inputs and expected outputs
 */
function testRecommendSimilarRecipes() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "recommendSimilarRecipes";

    const recipes = [
        {
            id: "1",
            ingredients: ["eggs", "flour", "milk"],
            servingSize: 4,
        },
        {
            id: "2",
            ingredients: ["eggs", "milk"],
            servingSize: 2,
        },
        {
            id: "3",
            ingredients: ["flour", "milk", "butter"],
            servingSize: 6,
        },
    ];
    const targetRecipeId = "1";

    try {
        const expectedResult = [
            {
                id: "2",
                ingredients: ["eggs", "milk"],
                servingSize: 2,
            },
            {
                id: "3",
                ingredients: ["flour", "milk", "butter"],
                servingSize: 6,
            },
        ];
        const result = recommendSimilarRecipes(recipes, targetRecipeId);
        if (JSON.stringify(result) === JSON.stringify(expectedResult)) {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test when targetRecipeId is not in recipes
    try {
        const nonExistentId = "4";
        const result = recommendSimilarRecipes(recipes, nonExistentId);
        if (JSON.stringify(result) === "[]") {
            number_of_tests_passed += 1;
        } else {
            number_of_tests_failed += 1;
        }
    } catch (err) {
        number_of_tests_failed += 1;
    }

    // Test when recipes list is empty
    try {
        const emptyRecipes = [];
        const result = recommendSimilarRecipes(emptyRecipes, targetRecipeId);
        if (JSON.stringify(result) === "[]") {
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
    testRecommendSimilarRecipes
};