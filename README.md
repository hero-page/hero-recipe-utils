
_This entire repository was created completely with **AI**, using the [hero-ai-package-creator](https://github.com/hero-page/hero-ai-package-creator), which is **open-source**, uses **GPT-4**, and is written & maintained by [**Sam Chahine**](https://hero.page/samir)_ ❣️🧞‍♀️ 



# hero-recipe-utils

A set of utility functions for building recipe-related apps.

## Functions

### convertUnits

Converts ingredient units from one measurement system to another (e.g., cups to grams). Handles basic units like cups, tablespoons, teaspoons, grams, ounces, and more. Provide unit conversion constants and conversion rates. Ensure correct handling of mixed units (e.g., 1 cup and 2 tablespoons) and fractions (1/2 cup). Handle basic units only; ignore extreme test cases with uncommon units or decimal places beyond two.

### scaleIngredients

Scales ingredient quantities based on the desired number of servings. Calculate the new quantity of each ingredient and return an updated list of ingredients. Handle edge cases where quantity is zero, negative or not provided. Ensure that output has the same unit as input (e.g., 1 cup should remain as 1 cup).

### parseIngredients

Extracts quantity, unit, and ingredient name from a given string with multiple formats (e.g., '1 cup sugar', '2 tablespoons olive oil', or '1/2 teaspoon salt'). Return an object with properties: quantity, unit, and name. Handle quantities in fractions, decimals or mixed format. Ignore test cases with uncommon formats or multiple units in one string (e.g., '1 cup and 3 tablespoons sugar').

### generateShoppingList

Create a shopping list based on the input recipes. Summarize ingredients needed from multiple recipes, grouping by ingredient name and unit, and output a list with aggregated quantities. Handle test cases where recipes use different units for the same ingredient (e.g., one recipe has grams, the other has ounces). Combine ingredients with similar names using fuzzy-matching or a given threshold value.

### cookTimeEstimator

Estimates the cook time based on the given ingredients and their quantities. Calculate an approximate time required for each ingredient (e.g., chopping vegetables, boiling pasta, etc.) based on default values, and return the sum of times. Handle edge cases with extreme quantities or negative values. Ignore cases with uncommon ingredients that do not have default cook times.

### filterByAllergens

Filters out recipes that contain specified allergens. Provide a list of allergen ingredients to check each recipe's ingredients list for matching allergens. Handle variations in allergen names (e.g., 'milk' vs. 'whole milk') by ignoring case and special characters. Ignore edge cases with uncommon allergens or multiple allergen names in one string.

### sortByDifficulty

Sorts a list of recipes based on their difficulty level (easy, medium, hard) or custom-defined ranking parameters. Apply a ranking system to determine which recipes are more difficult than others based on various factors like cook time, number of ingredients, and preparation steps. Ignore test cases with missing data, extreme values, or non-standard difficulty levels.

### recommendSimilarRecipes

Recommends similar recipes based on common ingredients and preparation steps. Calculate a similarity score between recipes using their ingredients, serving size, and other factors. Return a list of recipes sorted by their similarity score. Handle test cases where recipes have very few common ingredients or extreme differences. Ignore missing data or cases with entirely dissimilar recipes.

---

[Sam Chahine](https://github.com/kingmeers), at [Hero](https://hero.page)
                

### Tests for convertUnits

![convertUnits](https://img.shields.io/badge/convertUnits()-0%20passed%2C%205%20failed.-ff69b4)

### Tests for parseIngredients

![parseIngredients](https://img.shields.io/badge/parseIngredients()-0%20passed%2C%203%20failed.-ff69b4)

### Tests for recommendSimilarRecipes

![recommendSimilarRecipes](https://img.shields.io/badge/recommendSimilarRecipes()-3%20passed%2C%200%20failed.-13b285)

### Tests for scaleIngredients

![scaleIngredients](https://img.shields.io/badge/scaleIngredients()-4%20passed%2C%200%20failed.-13b285)

### Tests for sortByDifficulty

![sortByDifficulty](https://img.shields.io/badge/sortByDifficulty()-4%20passed%2C%200%20failed.-13b285)

### Tests for cookTimeEstimator

![cookTimeEstimator](https://img.shields.io/badge/cookTimeEstimator()-1%20passed%2C%204%20failed.-ff69b4)

### Tests for generateShoppingList

![generateShoppingList](https://img.shields.io/badge/generateShoppingList()-0%20passed%2C%201%20failed.-ff69b4)

### Tests for filterByAllergens

![filterByAllergens](https://img.shields.io/badge/filterByAllergens()-2%20passed%2C%200%20failed.-13b285)