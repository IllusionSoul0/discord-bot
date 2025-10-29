const { ActivityType } = require("discord.js");

module.exports = (client) => {
  let status = [
    {
      name: "🔥 Regarde IllusionSoul en stream | https://www.twitch.tv/illusionsoul_91",
      type: ActivityType.Streaming,
      url: "https://www.twitch.tv/illusionsoul_91",
    },
    {
      name: "▶️ Regarde les vidéos d'IllusionSoul | https://www.youtube.com/@illusionsoul91",
      type: ActivityType.Watching,
    },
  ];

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);
};
