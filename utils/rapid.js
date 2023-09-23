const axios = require('axios');
const dotenv =require('dotenv');
require('dotenv').config();
const generateSummary = async (text) => {
const options = {
  method: 'POST',
  url:  process.env.RAPID_API_URL ||'https://open-ai21.p.rapidapi.com/summary',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': process.env.RAPID_API_KEY ||'31d736b52dmsh7c243f1b5f035c5p1fb83cjsnb390540d488f',
    'X-RapidAPI-Host': process.env.RAPID_API_HOST ||'open-ai21.p.rapidapi.com'
  },
  data: {
    text: text,
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.result);
    return response.data.result;
} catch (error) {
	console.error(error);
}}
module.exports = {generateSummary};