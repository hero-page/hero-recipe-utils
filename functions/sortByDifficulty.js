/* eslint-disable */ 

/**
 * Sorts a list of recipes based on their difficulty level (easy, medium, hard)
 * or custom-defined ranking parameters.
 *
 * @param {Object[]} recipeList - The list of recipes to sort.
 * @param {string} recipeList.difficulty - The difficulty level of the recipe (easy, medium, hard).
 * @param {number} recipeList.cookTime - The cook time in minutes.
 * @param {number} recipeList.numIngredients - The number of ingredients required.
 * @param {number} recipeList.prepSteps - The number of preparation steps.
 * @param {string} [sortBy='difficulty'] - The custom ranking parameter to sort by (cookTime, numIngredients, prepSteps).
 * @return {Object[]} A sorted list of recipes based on their difficulty or custom ranking parameters.
 *
 * @example
 * sortByDifficulty(recipes, 'cookTime');
 *
 */
function sortByDifficulty(recipeList, sortBy = 'difficulty') {
    const validDifficulties = ["easy", "medium", "hard"];

    // Create a custom ranking function based on provided sortBy parameter
    const rankRecipes = (recipe) => {
        switch (sortBy) {
            case 'cookTime':
                return recipe.cookTime;
            case 'numIngredients':
                return recipe.numIngredients;
            case 'prepSteps':
                return recipe.prepSteps;
            default:
                return validDifficulties.indexOf(recipe.difficulty);
        }
    };

    // Filter out recipes with missing data or non-standard difficulty levels
    const filteredRecipes = recipeList.filter((recipe) => {
        return (
            recipe.cookTime &&
            recipe.numIngredients &&
            recipe.prepSteps &&
            validDifficulties.includes(recipe.difficulty)
        );
    });

    // Sort filtered recipes based on ranking function
    return filteredRecipes.sort((a, b) => {
        const rankA = rankRecipes(a);
        const rankB = rankRecipes(b);

        if (rankA < rankB) return -1;
        if (rankA > rankB) return 1;
        return 0;
    });
}

module.exports = {
    sortByDifficulty
};