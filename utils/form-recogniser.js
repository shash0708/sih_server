const {
  AzureKeyCredential,
  DocumentAnalysisClient,
} = require("@azure/ai-form-recognizer");
const dotenv = require("dotenv");
dotenv.config();

// set `<your-key>` and `<your-endpoint>` variables with the values from the Azure portal.
const key =
  process.env.FORM_RECOGNISER_KEY || "b484e43097934f1f8be88353d35c9fa7";
const endpoint =
  process.env.FORM_RECOGNISER_ENDPOINT ||
  "https://rohi-123.cognitiveservices.azure.com/";

// sample document
async function extract(formUrl) {
  try {
    const client = new DocumentAnalysisClient(
      endpoint,
      new AzureKeyCredential(key)
    );

    const poller = await client.beginAnalyzeDocumentFromUrl(
      "prebuilt-document",
      formUrl
    );

    const { content } = await poller.pollUntilDone();
    return content;
    // if (content <= 0) {
    //   console.log("No key-value pairs were extracted from the document.");
    // } else {
    //     console.log(content);
    // }
  } catch (err) {
    console.log(err);
  }
}

module.exports = extract;
