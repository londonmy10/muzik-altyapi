const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

  if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Sesli kanalda değilsin!` }})
    
  if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Müzik çalmıyor!` }})
  let volume = parseInt(args.join(" "));
  if (!volume) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Lütfen bir sayı giriniz!` }})
  if (isNaN(args[0])) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Lütfen geçerli bir sayı giriniz!` }})
  
  client.player.setVolume(message.guild.id, volume);
    
  message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.success} | Ses Seviyesi \`${args.join(" ")}\` ` }})


}

module.exports.config = {
  name: "sesi-ayarla",
  aliases: ['sesi-ayarla']
}
