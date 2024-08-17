require('dotenv').config({ path: './../.env' });
const { Telegraf } = require("telegraf");
const token = process.env.TG_BOT_TOKEN;
const webLink = process.env.WEB_LINK;
const bot = new Telegraf(token);

bot.start((ctx) =>
  ctx.reply(ctx.from.language_code === 'ru' ? 'Привет!' : 'Hello!', {
    reply_markup: {
      inline_keyboard: [[{ text: ctx.from.language_code === 'ru' ? 'Получить гороскоп' : 'Get horoscope', web_app: { url: webLink } }]],
    },
  })
);

bot.launch();