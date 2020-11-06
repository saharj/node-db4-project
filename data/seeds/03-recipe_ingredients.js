exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          id: 1,
          ingredient_id: 3,
          recipe_id: 1,
          amount: 1.5,
          measurement_unit: "cups",
        },
        {
          id: 2,
          ingredient_id: 3,
          recipe_id: 2,
          amount: 1,
          measurement_unit: "tsp",
        },
        {
          id: 3,
          ingredient_id: 1,
          recipe_id: 1,
          amount: 35,
          measurement_unit: "grams",
        },
        {
          id: 4,
          ingredient_id: 2,
          recipe_id: 3,
          amount: 3,
          measurement_unit: "",
        },
      ]);
    });
};
