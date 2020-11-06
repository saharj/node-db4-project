const db = require("../db-config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients as ri")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .where({ recipe_id })
    .select("i.ingredient_name", "ri.amount")
    .then((scheme) => {
      if (scheme) {
        return scheme;
      } else {
        return Promise.resolve(null);
      }
    });
}

function getInstructions(recipe_id) {}

module.exports = { getRecipes, getShoppingList, getInstructions };
