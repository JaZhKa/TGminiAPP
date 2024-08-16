const { Telegraf } = require("telegraf");
require('dotenv').config();
const token = process.env.TG_BOT_TOKEN;
const bot = new Telegraf(token);
const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();