module.exports = {
  name: "ping",
  description: "Donne le ping du bot",
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],
  deleted: false,

  callback: async (client, interaction) => {
    await interaction.deferReply();

    const reply = await interaction.fetchReply();

    const ping = reply.createdTimestamp - interaction.createdTimestamp;

    interaction.editReply(`🏓 Le ping du bot est : ${ping}ms`);
  },
};