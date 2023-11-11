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
    return error;
  }
};

// model to ask question on image
const askQuestion = async (prompt, Url) => {
  try {
    const model =
      "andreasjansson/blip-2:4b32258c42e9efd4288bb9910bc532a69727f9acd26aa08e175713a0a857a608";
    const input = {
      image: Url,
      question: prompt,
    };
    const output = await replicate.run(model, { input });
    return output;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // re-throw the error so it can be handled by the caller
  }
};

// chat completion model
const chatCompletion = async (prompt) => {
  console.log(prompt);
  try {

    const output = await replicate.run(
      "meta/llama-2-70b-chat:02e509c789964a7ea8736978a43525956ef40397be9033abf9fd2badfe68c9e3",
      {
        input: {
          debug: false,
          top_k: 50,
          top_p: 1,
          prompt: prompt,
          temperature: 0.5,
          system_prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
          max_new_tokens: 500,
          min_new_tokens: -1
        }
      }
    );
    console.log(output);
    return output;
  } catch (error) {
    console.error("An error occurred:", error);

    throw error; // re-throw the error so it can be handled by the caller
  }
};

module.exports = { imageGeneration, askQuestion, chatCompletion };
