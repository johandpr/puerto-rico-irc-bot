var settings = require('./settings.json')
var irc = require("irc");

var bot = new irc.Client(settings.server, settings.nickname, {
	channels: settings.channels
});

bot.addListener('error', function(message) {
    console.log('error: ', message);
});

bot.addListener('message#', function (nick, to, text, message) {
    console.log('-> [',message.nick,'] ',message.args[1]);
});
