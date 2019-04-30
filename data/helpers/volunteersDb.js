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
      .orWhere("email", id)
      .first();
  },

  addVolunteer: function(volunteer) {
    return replateDb("volunteers")
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
