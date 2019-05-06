//* import knex/database connection
const replateDb = require("../dbConfig");

//* export businesses table helper functions
module.exports = {
  getBusinesses: function() {
    return replateDb("businesses"); //* return array of business objects
  },

  getBusinessById: function(id) {
    return replateDb("businesses")
      .where("id", id) //* returns business within array
      .first();
  },

  getBusinessByEmail: function(email) {
    return replateDb("businesses")
      .returning("*")
      .where("email", email) //* returns business within array
      .first();
  },

  addBusiness: function(business) {
    return replateDb("businesses")
      .returning("id")
      .insert(business) //* returns id within array
      .then((id) => {
        return this.getBusinessById(id[0]);
      });
  },

  updateBusiness: function(id, business) {
    return replateDb("businesses")
      .update(business)
      .where("id", id) //* returns count of updated
      .then(c => {
        return this.getBusinessById(id);
      });
  },

  deleteBusiness: function(id) {
    return replateDb("businesses")
      .where("id", id)
      .del(); //* returns count of deleted
  }
};
