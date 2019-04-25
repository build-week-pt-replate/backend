exports.up = function(knex, Promise) {
  return knex.schema.createTable("requests", tbl => {
    tbl.increments();
    tbl.date("request_date").notNullable();
    tbl.time("request_time").notNullable();
    tbl
      .string("location_name", 255)
      .notNullable()
      .unique();
    tbl.string("location_street", 160).notNullable();
    tbl.string("location_city", 100).notNullable();
    tbl.string("location_state", 60).notNullable();
    tbl.string("location_zip", 20).notNullable();
    tbl.text("food_description").notNullable();
    tbl.text("comment");
    tbl
      .integer("business_id")
      .unsigned()
      .references("id")
      .inTable("businesses")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("volunteer_id")
      .unsigned()
      .references("id")
      .inTable("volunteers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("requests");
};
