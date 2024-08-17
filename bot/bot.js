require('dotenv').config({ path: './../.env' });
const { Telegraf } = require("telegraf");
const token = process.env.TG_BOT_TOKEN;
const webLink = process.env.WEB_LINK;
const bot = new Telegraf(token);

bot.start((ctx) =>
  ctx.reply(`Welcome ${ctx.from.language_code}`, {
    reply_markup: {
      keyboard: [[{ text: "Get horoscope", web_app: { url: webLink } }]],
    },
  })
);

bot.launch();