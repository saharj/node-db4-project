exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, recipe_name: "Omelet" },
        { id: 2, recipe_name: "Kookoo Sabzi" },
        { id: 3, recipe_name: "Pasta" },
      ]);
    });
};
