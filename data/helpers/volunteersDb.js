//* import knex/database connection
const replateDb = require("../dbConfig");

//* export volunteers table helper functions
module.exports = {
  getVolunteers: function() {
    return replateDb("volunteers"); //* return array of volunteer objects
  },

  getVolunteerById: function(id) {
    return replateDb("volunteers")
      .where("id", id) //* returns volunteer within array
      .first();
  },

  getVolunteerByEmail: function(email) {
    console.log("**************", email, "********************************")
    return replateDb("volunteers")
      .returning("*")
      .where("email", email) //* returns volunteer within array
      .first();
  },

  addVolunteer: function(volunteer) {
    return replateDb("volunteers")
      .returning("id")
      .insert(volunteer) //* returns id within array
      .then(([id]) => {
        return this.getVolunteerById(id);
      });
  },

  updateVolunteer: function(id, volunteer) {
    return replateDb("volunteers")
      .update(volunteer)
      .where("id", id) //* returns count of updated
      .then(c => {
        return this.getVolunteerById(id);
      });
  },

  deleteVolunteer: function(id) {
    return replateDb("volunteers")
      .where("id", id)
      .del(); //* returns count of deleted
  }
};
