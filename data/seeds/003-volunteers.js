exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("volunteers").insert([
    {
      id: 1,
      email: "jsmith@example.com",
      password: "abcd",
      phone: "4234442222",
      firstName: "john",
      lastName: "smith",
      city: "knoxville",
      state: "tn",
      zip: "37902"
    },
    {
      id: 2,
      email: "jrambo@example.com",
      password: "efgh",
      phone: "4234445555",
      firstName: "john",
      lastName: "rambo",
      city: "oak ridge",
      state: "tn",
      zip: "37748"
    }
  ]);
};
