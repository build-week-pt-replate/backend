exports.up = function(knex, Promise) {
  return knex.schema.createTable("requests", tbl => {
    tbl.increments();
    tbl.date("requestDate").notNullable();
    tbl.time("requestTime").notNullable();
    tbl
      .string("locationName", 255)
      .notNullable()
      .unique();
    tbl.string("locationStreet", 160).notNullable();
    tbl.string("locationCity", 100).notNullable();
    tbl.string("locationState", 60).notNullable();
    tbl.string("locationZip", 20).notNullable();
    tbl.text("foodDescription").notNullable();
    tbl.text("comment");
    tbl
      .integer("businessId")
      .unsigned()
      .references("id")
      .inTable("businesses")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("volunteerId")
      .unsigned()
      .references("id")
      .inTable("volunteers")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
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
  return knex.schema.dropTableIfExists("requests");
};
