exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "Sabzi" },
        { id: 2, ingredient_name: "Egg" },
        { id: 3, ingredient_name: "Oil" },
        { id: 4, ingredient_name: "Salt" },
        { id: 5, ingredient_name: "Tomato" },
      ]);
    });
};
