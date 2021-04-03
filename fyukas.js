const express = require("express");
const { Client, RichEmbed } = require("discord.js");
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require("http");
app.get("/", (request, response) => {
  console.log(Date.now() + "");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require("discord.js");
const client = new Discord.Client();
const data = new Map();


client.on("ready", () => {
  console.log(
    `${client.user.username} ismi ile giriş yapıldı! ${client.guilds.cache.size} Sunucu, ${client.users.cache.size} Kullanıcı.`
  );
});
client.on("message", async msg => {
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {
        let fyukas = await data.get(msg.author.id);

        if (fyukas === 1) {
        } else {
          await data.set(msg.author.id, 1);
          await sleep(5000);
          await msg.channel.send(
            ""
          ); // Discord sunucunuzun kalıcı linkini girin size mesaj atanlara oto dönüş yapması için.
          await sleep(2000);
        }
      }
    }
  }
});

client.login(process.env.TOKEN); // .env Dosyasında TOKEN'in karşısına giriniz
client.on("message", async msg => {
  if (msg.content.toLowerCase() === ("")){
    msg.channel.send("");
  }
});
      