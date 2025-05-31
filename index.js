const TelegramBot = require("node-telegram-bot-api"); // It return funtion
const dotenv = require("dotenv"); // Used for manage Envirnmental Variable
const axios = require('axios'); 

//BotFather is a Bot Which give secret Key to validate the user

// Load environment variables from .env file
dotenv.config();

// Check if the TELEGRAM_TOKEN exists
if (!process.env.TELEGRAM_TOKEN) {
  console.error("Telegram token not found in .env file");
  process.exit(1); // Exit if token is not found
} else {
  console.log("Connected");
}
// Initialize the bot with the token
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Listen to all incoming messages

// bot.on("message", (option) => {
//   console.log("Message Received on Bot:", option);

//   bot.sendMessage(
//     option.chat.id,
//     "Hello, I am a bot .I am Herer to help you with your queries. Please type /help to know about me "
//   );
// });

bot.onText(/\joke/,async (option) =>{
  const response =  await axios.get('http://www.official-joke-api.appspot.com/random_joke');
  const setup = response.data.setup;
  const punchline = response.data.punchline;

  bot.sendMessage(
    option.chat.id, setup + " " + punchline
  )
})