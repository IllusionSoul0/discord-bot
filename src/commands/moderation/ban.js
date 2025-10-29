const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  name: "ban",
  description: "Ban un membre du serveur",
  options: [
    {
      name: "target-user",
      description: "L'utilisateur que vous voulez ban",
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: "reason",
      description: "La raison du ban",
      type: ApplicationCommandOptionType.String,
    },
  ],
  permissionsRequired: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.Administrator],
  deleted: false,

  callback: (client, interaction) => {
    interaction.reply(`Ban ...`);
  },
};
