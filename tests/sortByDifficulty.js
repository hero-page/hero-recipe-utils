/* eslint-disable */ 


        const {sortByDifficulty} = require("../functions/sortByDifficulty"); 
        


        const fs = require("fs"); 

function generateImageBadgeURL(label, value, passed) {
 return `https://img.shields.io/badge/${encodeURIComponent(label)}-${value}-${passed === 0 ? '13b285' : 'ff69b4'}`;}

function generateTestBadge(functionName, numberOfPassed, numberOfFailed) {
 const url = generateImageBadgeURL(functionName + '()', encodeURIComponent(numberOfPassed + ' passed, ' + numberOfFailed + ' failed.'), numberOfFailed);

 return '\n\n### Tests for ' + functionName + '\n\n' + '![' + functionName + '](' + url + ')';}

function addToReadme(str) {fs.appendFile('./README.md', str, function (err) {if (err) throw err;console.log('String added to the file');});}/**
 * Test for sortByDifficulty function.
 */
function testSortByDifficulty() {
    let number_of_tests_passed = 0;
    let number_of_tests_failed = 0;
    const name_of_function = "sortByDifficulty";

    const recipeList = [
        {
            difficulty: "easy",
            cookTime: 20,
            numIngredients: 5,
            prepSteps: 3
        },
        {
            difficulty: "hard",
            cookTime: 60,
            numIngredients: 10,
            prepSteps: 6
        },
        {
            difficulty: "medium",
            cookTime: 30,
            numIngredients: 8,
            prepSteps: 4
        },
        {
            difficulty: "medium",
            cookTime: 25,
            numIngredients: 7,
            prepSteps: 5
        },
        {
            difficulty: "easy",
            cookTime: 15,
            numIngredients: 3,
            prepSteps: 2
        },
        {
            difficulty: "hard",
            cookTime: 50,
            numIngredients: 12,
            prepSteps: 7
        },
    ];

    try {
        // Test sorting by difficulty
        const sortByDifficultyResult = sortByDifficulty(recipeList);
        const expectedDifficulties = ["easy", "easy", "medium", "medium", "hard", "hard"];
        sortByDifficultyResult.every((recipe, index) => {
            if (recipe.difficulty === expectedDifficulties[index]) {
                number_of_tests_passed += 1;
            } else {
                number_of_tests_failed += 1;
            }
        });
    } catch (err) {
        number_of_tests_failed += 6;
    }

    try {
        // Test sorting by cookTime
        const sortByCookTimeResult = sortByDifficulty(recipeList, "cookTime");
        const expectedCookTimes = [15, 20, 25, 30, 50, 60];
        sortByCookTimeResult.every((recipe, index) => {
            if (recipe.cookTime === expectedCookTimes[index]) {
                number_of_tests_passed += 1;
            } else {
                number_of_tests_failed += 1;
            }
        });
    } catch (err) {
        number_of_tests_failed += 6;
    }

    try {
        // Test sorting by numIngredients
        const sortByNumIngredientsResult = sortByDifficulty(recipeList, "numIngredients");
        const expectedNumIngredients = [3, 5, 7, 8, 10, 12];
        sortByNumIngredientsResult.every((recipe, index) => {
            if (recipe.numIngredients === expectedNumIngredients[index]) {
                number_of_tests_passed += 1;
            } else {
                number_of_tests_failed += 1;
            }
        });
    } catch (err) {
        number_of_tests_failed += 6;
    }

    try {
        // Test sorting by prepSteps
        const sortByPrepStepsResult = sortByDifficulty(recipeList, "prepSteps");
        const expectedPrepSteps = [2, 3, 4, 5, 6, 7];
        sortByPrepStepsResult.every((recipe, index) => {
            if (recipe.prepSteps === expectedPrepSteps[index]) {
                number_of_tests_passed += 1;
            } else {
                number_of_tests_failed += 1;
            }
        });
    } catch (err) {
        number_of_tests_failed += 6;
    }

    addToReadme(generateTestBadge(name_of_function, number_of_tests_passed, number_of_tests_failed));
}

module.exports = {
    testSortByDifficulty
};