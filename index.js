require("dotenv").config();

const {
    Client,
    GatewayIntentBits,
    Events
} = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, () => {
    console.log(`Bot conectado como ${client.user.tag}`);
});

client.on(Events.MessageCreate, async (message) => {

    if (message.author.bot) return;

    if (message.content.toLowerCase() !== ".jaooz") return;

    message.reply(`
👋 **Olá!**

Este bot não está mais sendo mantido e encontra-se desativado.

Caso deseje reativá-lo, adquirir uma nova versão ou solicitar um novo projeto, entre em contato.

🌐 **Site**
https://jaooz.website

💬 **Discord**
https://discord.gg/3eSCkvqm4Y

Obrigado por utilizar meus serviços! ❤️
`);
});

client.login(process.env.TOKEN);
