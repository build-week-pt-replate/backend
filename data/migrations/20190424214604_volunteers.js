exports.up = function(knex, Promise) {
  return knex.schema.createTable("volunteers", tbl => {
    tbl.increments();
    tbl.string("firstName", 60).notNullable();
    tbl.string("lastName", 100).notNullable();
    tbl
      .string("email", 60)
      .notNullable()
      .unique();
    tbl.string("password", 100).notNullable();
    tbl
      .string("phone", 20)
      .notNullable()
      .unique();
    tbl.string("city", 100).notNullable();
    tbl.string("state", 60).notNullable();
    tbl.string("zip", 20).notNullable();
    tbl
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.fn.now());
    tbl
      .timestamp("updated_at")
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("volunteers");
};
