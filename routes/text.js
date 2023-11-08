const express = require("express");
const router = express.Router();
const translate = require("../utils/translate");
const rapid = require("../utils/rapid");
const Text = require("../models/Text");
const { model } = require("mongoose");

router.post("/summaryText", (req, res) => {
    const { text } = req.body;
    const summary = rapid.generateSummary(text);
    res.json({
      success: true,
      summary: summary,
    });
  });

router.post("/translateText", async (req, res) => {
    const { text, targetLanguage,presentLanguage } = req.body;
    const translatedText = await translate.translate(text, presentLanguage, targetLanguage);
    res.json({
      success: true,
      translatedText: translatedText,
    });
  });

module.exports = router;