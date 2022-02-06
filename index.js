function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var config = {
	channels: ["#puertorico"],
	server: "irc.rizon.net",
	name: "prbot" + getRandomInt(1000).toString()
};

var irc = require("irc");

// Create the bot name
var bot = new irc.Client(config.server, config.name, {
	channels: config.channels
});



bot.addListener('error', function(message) {
    console.log('error: ', message);
});
