const Replicate = require("replicate");
const token = process.env.REPLICATE_API_TOKEN;
const replicate = new Replicate({
  auth: token,
});

// model to generate image
const imageGeneration = async (prompt) => {
  try {
    const model =
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf";
    const input = { prompt: prompt };
    const output = await replicate.run(model, { input });
    return output;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// model to ask question on image
const askQuestion = async (prompt,Url) => {
    const model = "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608";
const input = {
  image: Url,
  question: prompt,
};
const output = await replicate.run(model, { input });
return output;
};
module.exports = { imageGeneration,askQuestion };
