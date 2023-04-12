/* eslint-disable */ 

/**
 * Scales ingredient quantities based on the desired number of servings.
 *
 * @param {Array<Object>} ingredients - The list of ingredients to scale. Each ingredient should have a "name", "quantity", and "unit".
 * @param {number} servings - The desired number of servings.
 * @return {Array<Object>} An updated list of ingredients with the new quantities.
 *
 * @example
 * const ingredients = [
 *   { name: 'flour', quantity: 1, unit: 'cup' },
 *   { name: 'sugar', quantity: 0.5, unit: 'cup' },
 * ];
 * const newServings = 2;
 * const result = scaleIngredients(ingredients, newServings); // [ { name: 'flour', quantity: 2, unit: 'cup' }, { name: 'sugar', quantity: 1, unit: 'cup' }]
 */
function scaleIngredients(ingredients, servings) {
    // Check if servings is valid
    if (servings <= 0) {
        throw new Error('Invalid number of servings');
    }

    // Iterate over ingredients and update quantity based on servings
    const updatedIngredients = ingredients.map((ingredient) => {
        if (!ingredient.hasOwnProperty('quantity') || ingredient.quantity < 0) {
            throw new Error(`Invalid quantity for ingredient: ${ingredient.name}`);
        }

        const updatedQuantity = ingredient.quantity * servings;
        return {
            name: ingredient.name,
            quantity: updatedQuantity,
            unit: ingredient.unit,
        };
    });

    return updatedIngredients;
}

module.exports = {
    scaleIngredients
};