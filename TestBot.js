const TeleBot = require('telebot');

const bot = new TeleBot({
  token: '343982108:AAEwO6G-rOgFBzoLduwkGXBj4RGzvC9LHxw', // Required. Telegram Bot API token.
  polling: { // Optional. Use polling.
    interval: 1000, // Optional. How often check updates (in ms).
    timeout: 0, // Optional. Update polling timeout (0 - short polling).
    limit: 100, // Optional. Limits the number of updates to be retrieved.
    retryTimeout: 5000, // Optional. Reconnecting timeout (in ms).
    allowedUpdates: [] // Optional. List the types of updates you want your bot to receive. Specify an empty list to receive all updates regardless of type.
  },
  webhook: { // Optional. Use webhook instead of polling.
    key: '__YOUR_KEY__.pem', // Optional. Private key for server.
    cert: '__YOUR_CERT__.pem', // Optional. Public key.
    url: 'https://....', // HTTPS url to send updates to.
    host: '0.0.0.0', // Webhook server host.
    port: 443 // Server port.
  },
  modules: {
    // Optional. Module configuration.
    //
    // Example:
    //
    // myModuleName: {
    //   data: 'my module data'
    // }
    }
});

// On every text message
bot.on('text', msg => {
  let id = msg.from.id;
  let text = msg.text;
  return bot.sendMessage(id, `You said: ${ text }`);
});

bot.connect();