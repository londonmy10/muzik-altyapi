const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {

    if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Sesli kanalda değilsin!` }})
  
    let queue = client.player.getQueue(message.guild.id);

    if(!queue) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Müzik çalmıyor!` }})

    let q = queue.songs.map((song, i) => {
        return `${i === 0 ? 'Şimdiki' : `${i+1}`}- ${song.name} : ${song.author}`
    }).join('\n');  
       message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.queue} | ${q}` }})


}

  
module.exports.config = {
  name: "liste",
  aliases: ['liste']
}
