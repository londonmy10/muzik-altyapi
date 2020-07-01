const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
  
  if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Sesli kanalda değilsin!` }})
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Sesli kanalda değilsin!` }})
  
  let song = await client.player.skip(message.guild.id);

  message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.success} | Geçildi:\n${song.name}` }})


}

module.exports.config = {
  name: "geç",
  aliases: ['geç']
}
