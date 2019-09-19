const express = require("express");
const router = express.Router();

// Get all
router.get("/", (req, res) => {
  req.db
    .collection("transactions")
    .find()
    .toArray((err, result) => {
      if (err) res.status(500).json({ message: err.message });

      res.json(result);
    });
});

// Get one
router.get("/:id", getTransaction, (req, res) => {
  res.json(res.transaction);
});

// Create one
router.post("/", (req, res) => {
  req.db.collection("transactions").insert(req.body, (err, result) => {
    if (err) return res.status(400).json({ message: err.message });

    res.status(201).json(req.body);
  });
});

// Middleware
async function getTransaction(req, res, next) {
  let transaction;
  try {
    transaction = await req.db
      .collection("transactions")
      .findOne({ _id: req.params.id });
    if (transaction == null) {
      return res.status(404).json({ message: "Cannot find transaction" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.transaction = transaction;
  next();
}

module.exports = router;
