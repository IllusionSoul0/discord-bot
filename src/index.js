const { Client, IntentsBitField } = require("discord.js");
const eventHandler = require("./handlers/eventHandler");
require("dotenv").config({ quiet: true });

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

eventHandler(client);

const token = process.env.TOKEN;
client.login(token);
