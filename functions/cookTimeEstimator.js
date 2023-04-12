/* eslint-disable */ 

/**
 * Estimates cook time based on the given ingredients and their quantities. Calculates an approximate
 * time required for each ingredient (e.g., chopping vegetables, boiling pasta, etc.) based on default values,
 * and returns the sum of times.
 *
 * @param {Object[]} ingredients - An array of objects, each object includes an ingredient name and its quantity.
 * @example
 *  cookTimeEstimator([{name: 'carrot', quantity: 3}, {name: 'pasta', quantity: 200}]); // returns 15
 * @returns {number} The sum of cook times for all ingredients and settings (in minutes).
 */
function cookTimeEstimator(ingredients) {
    // Define default cook times for common ingredients
    const defaultCookTimes = {
        carrot: 1,
        potato: 2,
        onion: 1,
        garlic: 1,
        pasta: 10,
        rice: 15
    };

    let cookTime = 0;

    // Loop through ingredients and calculate cook time based on quantity and default cook times
    for (const ingredient of ingredients) {
        if (defaultCookTimes[ingredient.name] && ingredient.quantity > 0) {
            cookTime += defaultCookTimes[ingredient.name] * ingredient.quantity;
        }
    }

    return cookTime;
}

module.exports = {
    cookTimeEstimator
};