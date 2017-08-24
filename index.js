const {Composer, log} = require('micro-bot');
const bot = new Composer();

bot.on('message', (ctx)=>{
    ctx.reply(ctx.message.text);
})

module.exports = bot;