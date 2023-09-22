const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const dotenv = require("dotenv");
dotenv.config();
let key = process.env.TEXT_TRANSLATION_KEY || "979c03c015384619809e1a1d6288c7e2";
let endpoint = process.env.TEXT_TRANSLATION_ENDPOINT || "https://api.cognitive.microsofttranslator.com";

// location, also known as region.
// required if you're using a multi-service or regional (not global) resource. It can be found in the Azure portal on the Keys and Endpoint page.
let location = "westus2";

async function translate(text, from, to) {
  try {
    const response = await axios({
      baseURL: endpoint,
      url: '/translate',
      method: 'post',
      headers: {
        'Ocp-Apim-Subscription-Key': key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type': 'application/json',
        'X-ClientTraceId': uuidv4().toString()
      },
      params: {
        'api-version': '3.0',
        'from': from,
        'to': to
      },
      data: [{
        'text': text
      }],
      responseType: 'json'
    });
    const translations = response.data.map(({translations}) => translations.map(({text}) => text));
    return translations[0][0];
  } catch (error) {
    console.error(error);
    throw new Error("Translation failed.");
  }
}

module.exports = translate;