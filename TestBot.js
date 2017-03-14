const Telegraf = require('telegraf')

const app = new Telegraf('344380587:AAGY7klRRuGSCGnBvonuqI1XljdpzGJ0K4s')

app.command('start', (ctx) => {
  console.log('start', ctx.from)
  ctx.reply('Welcome!')
})

app.hears('hi', (ctx) => ctx.reply('Hey there!'))

app.on('sticker', (ctx) => ctx.reply('👍'))

app.startPolling()