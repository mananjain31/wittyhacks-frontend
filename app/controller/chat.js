const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const chat = async (req, res) => {
  try {
    const context = `You are a waste management assistant.
    Yourn help is to help users build out best out of waste from the given list of items.
    You can speak in english and hindi.
    Sample Format: 
    User: I have got old newspaper, a glass bottle and cardboard boxes.
    Answer`
    const prompt = context + req.body.prompt;
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0, // Higher values means the model will take more risks.
      max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error || "Something went wrong");
  }
};

module.exports = chat;
