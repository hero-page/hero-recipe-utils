/* eslint-disable */ 

/**
 * Extracts quantity, unit, and ingredient name from a given string with multiple formats.
 *
 * @param {string} input - The ingredient string to parse.
 * @return {object} An object with properties: quantity, unit, and name.
 *
 * @example
 * parseIngredients('1 cup sugar'); // { quantity: 1, unit: 'cup', name: 'sugar' }
 * parseIngredients('2 tablespoons olive oil'); // { quantity: 2, unit: 'tablespoons', name: 'olive oil' }
 * parseIngredients('1/2 teaspoon salt'); // { quantity: 0.5, unit: 'teaspoon', name: 'salt' }
 */
function parseIngredients(input) {
    const units = [
        "cups", "cup", "tablespoons", "tablespoon", "teaspoons", "teaspoon", "ounces", "ounce", "pounds", "pound", "grams", "gram"
    ];

    input = input.trim();
    const regex = /(\d+(\.\d+)?(\s*[\/]\s*\d+)?)|([\w]*[\w\s]*[\w])/g;
    const components = [...input.matchAll(regex)].map((match) => match[0].trim());

    const result = {
        quantity: 1,
        unit: "",
        name: ""
    };

    if (components.length > 1) {
        result.name = components.pop();

        while (components.length) {
            const component = components.shift().toLowerCase();

            if (units.includes(component)) {
                result.unit = component;
            } else {
                const [numerator, denominator] = component.split("/").map(Number);
                result.quantity *= denominator ? numerator / denominator : numerator;
            }
        }
    } else {
        result.name = input;
    }

    return result;
}

module.exports = {
    parseIngredients
};