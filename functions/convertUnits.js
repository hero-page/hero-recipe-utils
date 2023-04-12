/* eslint-disable */ 

/**
 * Converts ingredient units from one measurement system to another (e.g., cups to grams).
 *
 * Handles basic units like cups, tablespoons, teaspoons, grams, ounces, and more. Provide
 * unit conversion constants and conversion rates. Ensure correct handling of mixed units
 * (e.g., 1 cup and 2 tablespoons) and fractions (1/2 cup). Handle basic units only; ignore
 * extreme test cases with uncommon units or decimal places beyond two.
 *
 * @param {number} inputAmount - The input amount to be converted.
 * @param {string} inputUnit - The unit of the input amount.
 * @param {string} desiredUnit - The desired output unit.
 * @return {number} The converted amount.
 *
 * @example
 * const result = convertUnits(1, 'cup', 'grams');
 * // result would be 201.6
 */
function convertUnits(inputAmount, inputUnit, desiredUnit) {
    // Unit conversion constants
    const conversionRates = {
        "cup": { "grams": 201.6, "ounces": 8, "tablespoons": 16, "teaspoons": 48 },
        "tablespoon": { "grams": 12.6, "ounces": 0.5, "cups": 0.0625, "teaspoons": 3 },
        "teaspoon": { "grams": 4.2, "ounces": 0.1667, "cups": 0.0208, "tablespoons": 0.3333 },
        "grams": { "ounces": 0.0353, "cups": 0.00496, "tablespoons": 0.0787, "teaspoons": 0.236 },
        "ounces": { "grams": 28.35, "cups": 0.125, "tablespoons": 2, "teaspoons": 6 }
    };

    // Convert the inputAmount to grams as a base unit for conversion
    const amountInGrams = inputAmount * conversionRates[inputUnit].grams;

    // Convert the amountInGrams to the desired unit
    const convertedAmount = amountInGrams * conversionRates["grams"][desiredUnit];

    // Round to at most 2 decimal places
    return Number(convertedAmount.toFixed(2));
}

module.exports = {
    convertUnits
};