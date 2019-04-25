exports.up = function(knex, Promise) {
  return knex.schema.createTable("volunteers", tbl => {
    tbl.increments();
    tbl
      .string("username", 60)
      .notNullable()
      .unique();
    tbl.string("password", 100).notNullable();
    tbl
      .string("phone", 20)
      .notNullable()
      .unique();
    tbl.string("email", 60);
    tbl.string("firstname", 60).notNullable();
    tbl.string("lastname", 100).notNullable();
    tbl.string("street", 160).notNullable();
    tbl.string("city", 100).notNullable();
    tbl.string("state", 60).notNullable();
    tbl.string("zip", 20).notNullable();
    tbl.string("dashboard", 100).notNullable();
    tbl.boolean("available");
    tbl.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("volunteers");
};
