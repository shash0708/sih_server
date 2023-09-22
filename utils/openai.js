const { OpenAI } = require('openai');
const dotenv =require('dotenv');
require('dotenv').config();

// Load the OpenAI API key from environment variables or use a default key
const openaikey = process.env.OPENAI_API_KEY || "sk-5f2b2b6f9b9b4b6e8b0b3a0a9b0b4b9b";
const openai = new OpenAI(openaikey);

// Define the Meaning Extraction function
const extractMeaning = async (userInputText) => {
  try {
    const description = await openai.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: 'user',
          content: `Identify and summarize the key points and main ideas in the provided text: ${userInputText}`,
        },
      ],
      max_tokens: 100,
    });

    console.log("Key Points and Main Ideas:");
    console.log(description.data.choices[0].message);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

// Call the extractMeaning function with the user's input text
module.exports = { extractMeaning };
