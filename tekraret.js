const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
  
if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Sesli kanalda değilsin!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Sesli kanalda değilsin!` }})

client.player.setRepeatMode(message.guild.id, true);
 // Get the current song
 let song = await client.player.nowPlaying(message.guild.id);
  
 message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.repeat} |  ${song.name} Adlı şarkı başarıyla tekrar oynatıldı!` }})    
}

module.exports.config = {
  name: "tekraret",
  aliases: ['tekraret']
}
