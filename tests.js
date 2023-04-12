const {testConvertUnits} = require('./tests/convertUnits.js');
const {testCookTimeEstimator} = require('./tests/cookTimeEstimator.js');
const {testFilterByAllergens} = require('./tests/filterByAllergens.js');
const {testGenerateShoppingList} = require('./tests/generateShoppingList.js');
const {testParseIngredients} = require('./tests/parseIngredients.js');
const {testRecommendSimilarRecipes} = require('./tests/recommendSimilarRecipes.js');
const {testScaleIngredients} = require('./tests/scaleIngredients.js');
const {testSortByDifficulty} = require('./tests/sortByDifficulty.js');

testConvertUnits();
testCookTimeEstimator();
testFilterByAllergens();
testGenerateShoppingList();
testParseIngredients();
testRecommendSimilarRecipes();
testScaleIngredients();
testSortByDifficulty();