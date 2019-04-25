exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("businesses").insert([
    {
      id: 1,
      username: "cferrell",
      password: "abcd",
      phone: "4235281528",
      email: "cferrell@example.com",
      companyname: "caraway inc",
      street: "123 landover drive",
      city: "knoxville",
      state: "tn",
      zip: "37902",
      dashboard: "www.caraway.com"
    },
    {
      id: 2,
      username: "jbegley",
      password: "efgh",
      phone: "4235553333",
      email: "jbegley@example.com",
      companyname: "blues brothers",
      street: "321 fairway ave",
      city: "oak ridge",
      state: "tn",
      zip: "37748",
      dashboard: "www.bluesbrothers.com"
    }
  ]);
};
