exports.up = function(knex, Promise) {
  return knex.schema.createTable("businesses", tbl => {
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
    tbl
      .string("companyname", 120)
      .notNullable()
      .unique();
    tbl.string("street", 160).notNullable();
    tbl.string("city", 100).notNullable();
    tbl.string("state", 60).notNullable();
    tbl.string("zip", 20).notNullable();
    tbl.string("dashboard", 100).notNullable();
    tbl.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("businesses");
};
