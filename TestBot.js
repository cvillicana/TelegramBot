const TeleBot = require('telebot');
const bot = new Telebot('343982108:AAEwO6G-rOgFBzoLduwkGXBj4RGzvC9LHxw');
// Setup polling way
bot.on('text', msg => {
  let fromId = msg.from.id;
  let firstName = msg.from.first_name;
  let reply = msg.message_id;
  return bot.sendMessage(fromId, `Welcome, ${ firstName }!`, { reply });
});

bot.connect();