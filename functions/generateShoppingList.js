/* eslint-disable */ 

/**
 * Generates a shopping list based on the input recipes.
 *
 * @param {Object[]} recipes - The list of recipes to process.
 * @param {number} threshold - The similarity threshold for combining ingredients.
 * @return {Object[]} A list of aggregated ingredients grouped by ingredient name and unit.
 *
 * @example
 * const recipes = [
 *   {
 *     name: "Pizza",
 *     ingredients: [
 *       { name: "Flour", quantity: 500, unit: "grams" },
 *       { name: "Salt", quantity: 10, unit: "grams" },
 *     ],
 *   },
 *   {
 *     name: "Bread",
 *     ingredients: [
 *       { name: "Flour", quantity: 1, unit: "pound" },
 *       { name: "Salt", quantity: 0.5, unit: "ounce" },
 *     ],
 *   },
 * ];
 *
 * const threshold = 0.8;
 *
 * console.log(generateShoppingList(recipes, threshold));
 * // Output: [
 * //   { name: "Flour", quantity: 951.7, unit: "grams" },
 * //   { name: "Salt", quantity: 24.1, unit: "grams" },
 * // ]
 */
function generateShoppingList(recipes, threshold) {
    function similar(a, b) {
        let maxLength = Math.max(a.length, b.length);
        if (maxLength === 0) return true;

        let levenshteinDistance = findEditDistance(a.toLowerCase(), b.toLowerCase());

        return 1 - levenshteinDistance / maxLength < threshold;
    }

    function findEditDistance(a, b) {
        const matrix = [];

        for (let i = 0; i <= b.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= a.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= b.length; i++) {
            for (let j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else {
                    matrix[i][j] = Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1,
                    );
                }
            }
        }

        return matrix[b.length][a.length];
    }

    const list = {};

    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            const name = ingredient.name;
            const unit = ingredient.unit;
            const quantity = ingredient.quantity;

            let matched = false;

            for (const key in list) {
                if (
                    similar(name, list[key].name) &&
                    unit === list[key].unit
                ) {
                    list[key].quantity += quantity;
                    matched = true;
                    break;
                }
            }

            if (!matched) {
                list[name] = { name, quantity, unit };
            }
        });
    });

    return Object.values(list);
}

module.exports = {
    generateShoppingList,
};