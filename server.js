
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(bodyParser.json());

require('dotenv').config();
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    const reply = chatCompletion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.status(500).json({ reply: "Sorry, something went wrong." });
  }
});

app.listen(3000, () => {
  console.log('✅ AI chatbot server running at http://localhost:3000');
});
require('dotenv').config();

