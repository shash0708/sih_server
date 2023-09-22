const axios = require('axios');

const generateSummary = async (text) => {
const options = {
  method: 'POST',
  url: 'https://open-ai21.p.rapidapi.com/summary',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '08c766dfb2msh6d00b8d4358723ep1a2161jsn420366549ee8',
    'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
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