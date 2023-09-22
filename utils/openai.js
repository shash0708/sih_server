const { OpenAI } = require('openai')
require('dotenv').config()
const openaikey="sk-9r4EDVECcGVxp01hWVoGT3B1bkFJT4t40B5o0XMDmj9d1WuS";
const openai = new OpenAI(openaikey);





// Define the Meaning Extraction function
const MeaningExtraction = async (userInputText) => {
  const description = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: `Identify and summarize the key points and main ideas in the provided text: ${userInputText}`,
      },
    ],
    max_tokens: 100
  });

  console.log("Key Points and Main Ideas:");
  console.log(description.data.choices[0].message);
}
//   const tags = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: 'user',
//         content: `Generate keywords for the following text: ${userInputText}`,
//       }
//     ],
//     max_tokens: 100
//   });

//   console.log("Keywords:");
//   console.log(tags.data.choices[0].message);
// };

// Call the generateMeta function with the user's input text
module.exports = MeaningExtraction;
