/* eslint-disable */ 

/**
 * Filters out recipes that contain specified allergens.
 *
 * @param {Object[]} recipes - List of recipe objects with an ingredients array.
 * @param {string[]} allergens - List of allergen ingredients to filter out.
 * @return {Object[]} Filtered list of recipes not containing the specified allergens.
 * 
 * @example
 * // Assuming this is a list of recipe objects with an ingredients array
 * const recipes = [
 *   {id: 1, name: "Recipe1", ingredients: ["milk", "flour", "sugar"]},
 *   {id: 2, name: "Recipe2", ingredients: ["eggs", "vanilla", "flour"]},
 * ];
 *
 * const allergens = ["milk"];
 *
 * filterByAllergens(recipes, allergens);
 * //Output: [{id: 2, name: "Recipe2", ingredients: ["eggs", "vanilla", "flour"]}]
 */
function filterByAllergens(recipes, allergens) {
    const cleanedAllergens = allergens.map((allergen) => allergen.toLowerCase().replace(/[^\w\s]/gi, ''));
    
    return recipes.filter((recipe) => {
        const cleanedIngredients = recipe.ingredients.map((ingredient) => ingredient.toLowerCase().replace(/[^\w\s]/gi, ''));
        return !cleanedAllergens.some((allergen) => cleanedIngredients.includes(allergen));
    });
}

module.exports = {
    filterByAllergens
};