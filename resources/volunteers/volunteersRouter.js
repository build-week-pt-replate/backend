//* import volunteers helper functions
const volunteersDb = require("../../data/helpers/volunteersDb");

//* create Router
const express = require("express");
const router = express.Router();

//* Create Endpoints
router.get("/", async (req, res) => {
  try {
    const volunteers = await volunteersDb.getVolunteers();
    if (volunteers) {
      res.status(200).json(volunteers);
    } else {
      res.status(500).json({ error: "Unable to retrieve volunteers" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const volunteer = await volunteersDb.getVolunteerById(id);
    if (volunteer) {
      res.status(200).json(volunteer);
    } else {
      res.status(404).json({ error: "Invalid volunteer id" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const toEdit = req.body;
    const updatedVolunteer = await volunteersDb.updateVolunteer(id, toEdit);
    if (updatedVolunteer) {
      res.status(200).json(updatedVolunteer);
    } else {
      res.status(404).json({
        error:
          "Unable to edit specified volunteer. Check that the id is correct."
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await volunteersDb.deleteVolunteer(id);
    if (deletedCount) {
      res
        .status(200)
        .json({ message: `Volunteer id ${id} was successfully deleted.` });
    } else {
      res.status(404).json({ message: "Invalid volunteer id" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
