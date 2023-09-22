const openai = require('../config/openaiConfig');

// Define the user input text you want to analyze
const userInputText = `
DO NOT DISTURB!
9
Creativity and Innovation at work!
1
C O
D
Intellectual Property is the product of a person's intelligence, creativity, hard work, and skill. It results from an idea that comes to one's mind and is given creative expression.
There is no age to create your own Intellectual Property. In fact, every time you compose a poem, write an assignment, make a painting or sketch that is original, you are creating your own Intellectual Property!
There are 4 main types of Intellectual Property Rights
TM
C
Patents
Trademarks
Copyright
Designs
So, why should I care about Intellectual Property?
Because Intellectual Property:
helps to reward you for your hard work and creativity
helps in creating new and interesting inventions
uil creates more job opportunities that build a stronger economy :selected: helps you to find your favourite products
Can you match the Intellectual Property Right to the correct object
?
A. PATENT
B. TRADEMARK C. COPYRIGHT
D. DESIGN
A. NOVEL B. SHOE DESIGN C. PHONE
D. MAKE IN INDIA
Department of Industrial Policy and Promotion Government of India Ministry of Commerce and Industry
DIA HIGH THINK. CREATE. INSPIRE. LET'S TAKE INDIA HIGHER. ER
cipam Creative India
THINK. CREATE. INSPIRE. LET'S TAKE INDIA HIGHER.
Innovative India
INTA
I
Internatl Trademark Assocl I :selected: :selected: :selected: :selected: :selected: :selected: :selected:
`;

// Define the generateMeta function
const generateMeta = async (userInputText) => {
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

  const tags = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: `Generate keywords for the following text: ${userInputText}`,
      }
    ],
    max_tokens: 100
  });

  console.log("Keywords:");
  console.log(tags.data.choices[0].message);
};

// Call the generateMeta function with the user's input text
generateMeta(userInputText);
