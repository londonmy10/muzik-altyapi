const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
 
  if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Sesli kanalda değilsin!` }})

  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Müzik çalmıyor!` }})

  client.player.clearQueue(message.guild.id);

   message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.success} | Liste temizlendi!` }})

}

module.exports.config = {
  name: "listeyi-temizle",
  aliases: ['listeyi-temizle']
}
