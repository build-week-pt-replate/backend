exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("businesses").insert([
    {
      id: 1,
      password: "abcd",
      phone: "4235281528",
      email: "cferrell@example.com",
      companyName: "caraway inc",
      officeName: "",
      officeEmail: "",
      street: "123 landover drive",
      city: "knoxville",
      state: "tn",
      zip: "37902"
    },
    {
      id: 2,
      password: "efgh",
      phone: "4235553333",
      email: "jbegley@example.com",
      companyName: "blues brothers",
      officeName: "",
      officeEmail: "",
      street: "321 fairway ave",
      city: "oak ridge",
      state: "tn",
      zip: "37748"
    }
  ]);
};
