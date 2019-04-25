exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("volunteers").insert([
    {
      id: 1,
      username: "jsmith",
      password: "abcd",
      phone: "4234442222",
      email: "jsmith@example.com",
      firstname: "john",
      lastname: "smith",
      street: "123 oakwood drive",
      city: "knoxville",
      state: "tn",
      zip: "37902",
      dashboard: "???",
      available: true
    },
    {
      id: 2,
      username: "jrambo",
      password: "efgh",
      phone: "4234445555",
      email: "jrambo@example.com",
      firstname: "john",
      lastname: "rambo",
      street: "321 zane lane",
      city: "oak ridge",
      state: "tn",
      zip: "37748",
      dashboard: "???",
      available: true
    }
  ]);
};

// .string("username", 60)
// tbl.string("password", 100).notNullable();
// .string("phone", 20)
// tbl.string("email", 60);
// tbl.string("firstname", 60).notNullable();
// tbl.string("lastname", 100).notNullable();
// tbl.string("street", 160).notNullable();
// tbl.string("city", 100).notNullable();
// tbl.string("state", 60).notNullable();
// tbl.string("zip", 20).notNullable();
// tbl.string("dashboard", 100).notNullable();
// tbl.boolean("available");
