/* eslint-disable */ 

/**
 * Recommends similar recipes based on common ingredients and preparation steps
 *
 * @param {Object[]} recipes - The list of recipes to compare.
 * @param {string} targetRecipeId - The id of the recipe for which similar recipes are to be found.
 * @return {Object[]} A list of recipes sorted by their similarity score.
 * 
 * Example usage:
 * const recipes = [
 *   {
 *     id: "1",
 *     ingredients: ["eggs", "flour", "milk"],
 *     servingSize: 4,
 *   },
 *   {
 *     id: "2",
 *     ingredients: ["eggs", "milk"],
 *     servingSize: 2,
 *   },
 * ];
 * const targetRecipeId = "1";
 * console.log(recommendSimilarRecipes(recipes, targetRecipeId));
 */
function recommendSimilarRecipes(recipes, targetRecipeId) {
    const targetRecipe = recipes.find((recipe) => recipe.id === targetRecipeId);

    if (!targetRecipe) {
        return [];
    }

    const similarityScores = recipes.map((recipe) => {
        const commonIngredients = recipe.ingredients.filter((ingredient) =>
            targetRecipe.ingredients.includes(ingredient)
        ).length;
        const servingSizeDifference = Math.abs(
            recipe.servingSize - targetRecipe.servingSize
        );
        return {
            id: recipe.id,
            score: commonIngredients / (servingSizeDifference + 1),
        };
    });

    const sortedSimilarityScores = similarityScores.sort(
        (a, b) => b.score - a.score
    );

    const similarRecipes = sortedSimilarityScores
        .filter((score) => score.score > 0 && score.id !== targetRecipeId)
        .map((score) => recipes.find((recipe) => recipe.id === score.id));

    return similarRecipes;
}

module.exports = {
    recommendSimilarRecipes
};