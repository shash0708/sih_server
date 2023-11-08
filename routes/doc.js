const express = require("express");
const router = express.Router();
const formRecognizer = require("../utils/form-recogniser");
const openai = require("../utils/openai");
const translate = require("../utils/translate");
const rapid = require("../utils/rapid");
const Text = require("../models/Text");
const Doc = require("../models/Doc");

router.post("/process", async (req, res) => {
  const { fileUrl, targetLanguage } = req.body;

  try {
    // Extract text from document using Form Recognizer
    const extracted_data = await formRecognizer.extract(fileUrl);

    // Generate summary using OpenAI's GPT-3 API
    // const summary = await openai.extractMeaning(extracted_data);
    const summary = await rapid.generateSummary(extracted_data);

    // Translate summary to target language
    const translatedSummary = await translate.translate(
      summary,
      "en",
      targetLanguage
    );

    // Save response and URL to database
    const text = new Text({
      extracted: extracted_data,
      summary: summary,
      translated: translatedSummary,
      fileUrl: fileUrl,
    });
    const t1 = await text.save();

    // Send response with translated summary
    res.json({
      success: true,
      summary: translatedSummary,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing the document.");
  }
});



router.post("/summaryDocument", async (req, res) => {
  const { fileUrl, targetLanguage } = req.body;

  try {
    // Extract text from document using Form Recognizer
    const extracted_data = await formRecognizer.extract(fileUrl);

    // Generate summary using OpenAI's GPT-3 API
    // const summary = await openai.extractMeaning(extracted_data);
    const summary = await rapid.generateSummary(extracted_data);

    // // Save response and URL to database
    // const text = new Text({
    //   extracted: extracted_data,
    //   summary: summary,
    //   fileUrl: fileUrl,
    // });
    // const t1 = await text.save();

    // Send response with translated summary
    res.json({
      success: true,
      summary: summary,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing the document.");
  }
});

router.post("/store-translated", async (req, res) => {
  const doc = new Doc({
    beforeLink: req.body.beforeLink,
    afterLink: req.body.afterLink,
  });
  try {
    const doc1 = await doc.save();
    res.send("Successfully Stored");
  } catch (err) {
    console.log(err);
    res.status(500).send("An error occurred while Stroting the Link.");
  }
});

module.exports = router;
