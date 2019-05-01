exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("requests").insert([
    {
      id: 1,
      requestDate: "2019-04-24",
      requestTime: "11:00:00",
      locationName: "Hunger First",
      locationStreet: "111 Kenwood Rd",
      locationCity: "Knoxville",
      locationState: "TN",
      locationZip: "37902",
      foodDescription: "Various canned food items",
      comment: "Can be picked up anytime before 2pm",
      businessId: 1,
      volunteerId: null
    },
    {
      id: 2,
      requestDate: "2019-04-27",
      requestTime: "10:30:00",
      locationName: "Hope Shelter",
      locationStreet: "110 Carolina Street",
      locationCity: "Knoxville",
      locationState: "TN",
      locationZip: "37902",
      foodDescription: "Boxed and canned items",
      comment: "",
      businessId: 2,
      volunteerId: 1
    }
  ]);
};
