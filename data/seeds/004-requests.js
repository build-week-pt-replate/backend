exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("requests").insert([
    {
      id: 1,
      request_date: "2019-04-24",
      request_time: "11:00:00",
      location_name: "Hunger First",
      location_street: "111 Kenwood Rd",
      location_city: "Knoxville",
      location_state: "TN",
      location_zip: "37902",
      food_description: "Various canned food items",
      comment: "Can be picked up anytime before 2pm",
      business_id: 1,
      volunteer_id: null
    },
    {
      id: 2,
      request_date: "2019-04-27",
      request_time: "10:30:00",
      location_name: "Hope Shelter",
      location_street: "110 Carolina Street",
      location_city: "Knoxville",
      location_state: "TN",
      location_zip: "37902",
      food_description: "Boxed and canned items",
      comment: "",
      business_id: 2,
      volunteer_id: 1
    }
  ]);
};
