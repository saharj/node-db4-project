exports.up = function (knex, Promis) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl.float("amount").unsigned().notNullable();
      tbl.string("measurement_unit", 128).notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl.string("step", 128).notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
