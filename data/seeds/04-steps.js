exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("steps").insert([
        { id: 1, recipe_id: "1", step: "Mix all dry ingredients." },
        { id: 2, recipe_id: "3", step: "Mix all dry ingredients." },
        { id: 3, recipe_id: "1", step: "Add eggs." },
      ]);
    });
};
