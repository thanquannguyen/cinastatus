 require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
    ws: { properties: { $browser: "Discord iOS" }}
})

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`);
    client.user.setActivity(`Cinna`, { type: 'WATCHING' });
});


client.on("message", async message => {
  const guild = client.guilds.cache.get('899612215739559977');
  const bot1 = guild.members.cache.get('408785106942164992'); 
  const bot2 = guild.members.cache.get('776438217683369984');
  const role = guild.roles.cache.find(role => role.name === 'Auto');
  if (guild) {
    if (bot1.presence.status === 'offline') {
      if (message.content == 'owoh' || message.content == 'owob' || message.content == 'oh' || message.content == 'ob' || message.content == 'owo hunt' || message.content == 'owo battle') {
        message.reply('OwO đã offline, ngừng spam và thử lại sau.');
        const guild = client.guilds.cache.get('899612215739559977');
        client.users.fetch(message.author.id).then((user) => {
            user.send('OwO đã offline, ngừng spam và thử lại sau.');
        });  
        const member = guild.members.cache.get(message.author.id);
        if (role) {
          member.roles.remove(role);
        }    
      }
    } else if (bot2.presence.status === 'offline') {
      if (message.content == 'owoh' || message.content == 'owob' || message.content == 'oh' || message.content == 'ob') {
        message.reply('AntiCaptcha đã offline, ngừng spam, liên hệ Cuu ngay lập tức và thử lại sau.');
        const guild = client.guilds.cache.get('899612215739559977');
        client.users.fetch(message.author.id).then((user) => {
            user.send('AntiCaptcha đã offline, ngừng spam, liên hệ Cuu ngay lập tức và thử lại sau.');
        });  
        const member = guild.members.cache.get(message.author.id);
        if (role) {
          member.roles.remove(role);
        }    
      }
    }

    if (message.content == 'statuscheck') {
      if (bot1.presence.status === 'offline' || bot2.presence.status === 'offline') {
        let embed = new Discord.MessageEmbed();
        embed.setDescription('Kết luận: Không nên spam.');
        embed.setColor('ff1100');
        message.channel.send(`Trạng thái:\n<@!408785106942164992>: ${bot1.presence.status}\n<@!776438217683369984>: ${bot2.presence.status}`, embed)
      } else {
        let embed = new Discord.MessageEmbed();
        embed.setDescription('Kết luận: Có thể spam.');
        embed.setColor('15ff00');
        message.channel.send(`Trạng thái:\n<@!408785106942164992>: ${bot1.presence.status}\n<@!776438217683369984>: ${bot2.presence.status}`, embed)
      }
    }

  }
})

client.login(process.env.TOKEN);
