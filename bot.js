const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json'); // Bot tokeninizi config dosyasından alıyoruz

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Bot hazır olduğunda çalışır
client.once('ready', () => {
  console.log(`✅ Bot hazır! ${client.user.tag} olarak giriş yapıldı.`);
});

// Mesaj algılama olayı
client.on('messageCreate', async (message) => {
  // Bot kendi mesajlarını kopyalamamalı
  if (message.author.bot) return;

  try {
    // Kullanıcının mesajını kopyala ve gönder
    const botMessage = await message.channel.send(`${message.content}`);

    // Botun gönderdiği mesaja gülücük emojisi ekle
    await botMessage.react('😂');
  } catch (error) {
    console.error('❌ Bir hata oluştu:', error);
  }
});

// Botu başlat
client.login(token);
