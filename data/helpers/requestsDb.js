//* import knex/database connection
const replateDb = require("../dbConfig");

//* export requests table helper functions
module.exports = {
  getRequests: function() {
    return replateDb("requests"); //* return array of request objects
  },

  getRequestsByBus: function(id) {
    return replateDb("requests")
      .where("businessId", id) //* return array of request objects
  },

  getRequestById: function(id) {
    return replateDb("requests")
      .where("id", id) //* returns request within array
      .first();
  },

  addRequest: function(request) {
    return replateDb("requests")
      .returning("id")
      .insert(request) //* returns id within array
      .then(id => {
        return this.getRequestById(id[0]);
      });
  },

  updateRequest: function(id, request) {
    return replateDb("requests")
      .update(request)
      .where("id", id) //* returns count of updated
      .then(c => {
        return this.getRequestById(id);
      });
  },

  deleteRequest: function(id) {
    return replateDb("requests")
      .where("id", id)
      .del()  //* returns count of deleted
  }
};
