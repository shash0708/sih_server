const Replicate = require("replicate");
const express = require("express");
const router = express.Router();
// const replicate = new Replicate({
//     auth: process.env.REPLICATE_API_TOKEN,
//   });
const token = process.env.REPLICATE_API_TOKEN;
const replicate = new Replicate({
  auth: token,
});

router.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    const model =
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
    const input = { prompt: prompt };
    const output = await replicate.run(model, { input });
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
