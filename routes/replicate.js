const express = require("express");
const router = express.Router();
const replicate = require("../utils/replicate");

router.get("/generate-image/:prompt", async (req, res) => {
  try {
    const prompt = req.params.prompt;
    const output = await replicate.imageGeneration(prompt);
    res.json({
      success: true,
      output: output,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing the document.");
  }
});

router.post("/ask-question", async (req, res) => {
  const { prompt, Url } = req.body;
  try {
    const output=await replicate.askQuestion(prompt, Url);
    res.json({
      success: true,
      output: output,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while processing the document.");
  }
});

module.exports = router;
