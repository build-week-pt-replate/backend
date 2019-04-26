//* import requests helper functions
const requestsDb = require("../../data/helpers/requestsDb");

//* create Router
const express = require("express");
const router = express.Router();

//* Create Endpoints
router.get("/", async (req, res) => {
  try {
    const requests = await requestsDb.getRequests();
    if (requests) {
      res.status(200).json(requests);
    } else {
      res.status(500).json({ error: "Unable to retrieve requests" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const request = await requestsDb.getRequestById(id);
    if (request) {
      res.status(200).json(request);
    } else {
      res.status(404).json({ error: "Invalid request id" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const request = req.body;
    const newRequest = await requestsDb.addRequest(request);
    if (newRequest) {
      res.status(201).json(newRequest);
    } else {
      res.status(500).json({ error: "Unable to add new request" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const toEdit = req.body;
    const updatedRequest = await requestsDb.updateRequest(id, toEdit);
    if (updatedRequest) {
      res.status(200).json(updatedRequest);
    } else {
      res.status(404).json({
        error: "Unable to edit specified request. Check that the id is correct."
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await requestsDb.deleteRequest(id);
    if (deletedCount) {
      res
        .status(200)
        .json({ message: `Request id ${id} was successfully deleted.` });
    } else {
      res.status(404).json({ message: "Invalid request id" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
