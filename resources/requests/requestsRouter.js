//* import requests helper functions
const requestsDb = require("../../data/helpers/requestsDb");

//* import authorization middleware to filter access to resource
const authorization = require("../../auth/authMiddleware");

//* create Router
const express = require("express");
const router = express.Router();

//* Create Endpoints
router.get("/", authorization.verify, async (req, res) => {
  try {
    const requests = await requestsDb.getRequests();
    if (requests) {
      res.status(200).json(requests);
    } else {
      res.status(500).json({ error: "Unable to retrieve requests" });
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.get("/:id", authorization.verify, async (req, res) => {
  try {
    const { id } = req.params;
    const request = await requestsDb.getRequestById(id);
    if (request) {
      res.status(200).json(request);
    } else {
      res.status(404).json({ error: "Invalid request id" });
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.post("/", authorization.verify, async (req, res) => {
  try {
    const request = req.body;
    const newRequest = await requestsDb.addRequest(request);
    if (newRequest) {
      res.status(201).json(newRequest);
    } else {
      res.status(500).json({ error: "Unable to add new request" });
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

router.put("/:id", authorization.verify, async (req, res) => {
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
    res.status(500).json({ err: error.message });
  }
});

router.delete("/:id", authorization.verify, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await requestsDb.deleteRequest(id);
    if (deletedCount) {
      res
        .status(200)
        .json(id);
    } else {
      res.status(404).json({ message: "Invalid request id" });
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports = router;
