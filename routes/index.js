const express = require('express');
const router = express.Router();
const formRecognizer = require('../utils/form-recogniser');
const openai = require('../utils/openai');
const translate = require('../utils/translate');
const Text=require('../models/Text');

router.post('/process', async (req, res) => {
    const { fileUrl, targetLanguage } = req.body;

    try {
        // Extract text from document using Form Recognizer
        const keyValuePairs = await formRecognizer.extract(fileUrl);

        // Generate summary using OpenAI's GPT-3 API
        const summary = await openai.generateSummary(keyValuePairs);

        // Translate summary to target language
        const translatedSummary = await translate(summary, 'en', targetLanguage);

        // Save response and URL to database
        const response = {
            success: true,
            fileUrl,
            summary: translatedSummary
        };
        await Text.saveResponse(response);

        // Send response with translated summary
        res.json({
            success: true,
            summary: translatedSummary
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing the document.');
    }
});

module.exports = router;