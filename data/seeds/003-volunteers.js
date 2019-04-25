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
