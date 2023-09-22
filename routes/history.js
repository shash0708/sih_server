const express = require("express");
const router = express.Router();
const Text = require("../models/Text");
const Doc = require("../models/Doc");

router.get("/history", async (req, res) => {
  try {
    const texts = await Text.find();
    const docs = await Doc.find();
    res.json({
      success: true,
      texts,
      docs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while retrieving history.");
  }
});

module.exports = router;