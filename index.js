require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");

// البوت الأول
const client1 = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// البوت الثاني
const client2 = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// تشغيل البوت الأول
client1.once("ready", async () => {
  console.log(`✅ Bot 1: ${client1.user.tag}`);

  try {
    const guild = await client1.guilds.fetch("1516709826695004182");
    const channel = await guild.channels.fetch("1518871777839943710");

    joinVoiceChannel({
      channelId: channel.id,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: false,
    });

    console.log("🎧 Bot 1 joined voice channel!");
  } catch (err) {
    console.error(err);
  }
});

// تشغيل البوت الثاني
client2.once("ready", async () => {
  console.log(`✅ Bot 2: ${client2.user.tag}`);

  try {
    const guild = await client2.guilds.fetch("1516709826695004182");
    const channel = await guild.channels.fetch("1518871738753220649");

    joinVoiceChannel({
      channelId: channel.id,
      guildId: guild.id,
      adapterCreator: guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: false,
    });

    console.log("🎧 Bot 2 joined voice channel!");
  } catch (err) {
    console.error(err);
  }
});

// تسجيل الدخول
client1.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);