// تشغيل البوت الأول
client1.once("ready", async () => {
  console.log(`✅ Bot 1: ${client1.user.tag}`);

  const guild = await client1.guilds.fetch("1516709826695004182");
  const channel = await guild.channels.fetch("1518871777839943710");

  joinVoiceChannel({
    channelId: channel.id,
    guildId: guild.id,
    adapterCreator: guild.voiceAdapterCreator,
    selfDeaf: true,
    selfMute: false,
  });
});

// تشغيل البوت الثاني
client2.once("ready", async () => {
  console.log(`✅ Bot 2: ${client2.user.tag}`);

  const guild = await client2.guilds.fetch("1516709826695004182");
  const channel = await guild.channels.fetch("1518871857783111820");

  joinVoiceChannel({
    channelId: channel.id,
    guildId: guild.id,
    adapterCreator: guild.voiceAdapterCreator,
    selfDeaf: true,
    selfMute: false,
  });
});

client1.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);