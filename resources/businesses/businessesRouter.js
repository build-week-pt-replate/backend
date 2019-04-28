//* import businesses helper functions
const businessesDb = require("../../data/helpers/businessesDb");

//* import authorization middleware to filter access to resource
const authorization = require("../../auth/authMiddleware");

//* create Router
const express = require("express");
const router = express.Router();

//* Create Endpoints
router.get("/", authorization.verify, async (req, res) => {
  try {
    const businesses = await businessesDb.getBusinesses();
    if (businesses) {
      res.status(200).json(businesses);
    } else {
      res.status(500).json({ error: "Unable to retrieve businesses" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", authorization.verify, async (req, res) => {
  try {
    const { id } = req.params;
    const business = await businessesDb.getBusinessById(id);
    if (business) {
      res.status(200).json(business);
    } else {
      res.status(404).json({ error: "Invalid business id" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", authorization.verify, async (req, res) => {
  try {
    const { id } = req.params;
    const toEdit = req.body;
    const updatedBusiness = await businessesDb.updateBusiness(id, toEdit);
    if (updatedBusiness) {
      res.status(200).json(updatedBusiness);
    } else {
      res.status(404).json({
        error:
          "Unable to edit specified business. Check that the id is correct."
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", authorization.verify, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await businessesDb.deleteBusiness(id);
    if (deletedCount) {
      res
        .status(200)
        .json({ message: `Business id ${id} was successfully deleted.` });
    } else {
      res.status(404).json({ message: "Invalid business id" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
