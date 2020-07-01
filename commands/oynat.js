const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async (client, message, args) => {
let queue = args.join(" ");
if(!message.member.voice.channel) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Sesli kanalda değilsin!` }})
  if (!queue) return message.channel.send({embed: {color: client.colors.error, description: `${client.emotes.error} | Lütfen aramak için bir şey girin girin!` }})

let playing = client.player.isPlaying(message.guild.id);

if(playing){
    // Add the song to the queue
    let song = await client.player.addToQueue(message.guild.id, queue, message.member.user.tag);
    message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.success} | ${song.name} Listeye eklendi!` }})
} else {
    // Else, play the song
    let song = await client.player.play(message.member.voice.channel, queue, message.member.user.tag);
    message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.music} | Şuan çalan :\n${song.name}` }})
    song.queue.on('end', () => {
    message.channel.send({embed: {color: client.colors.warning, description: `${client.emotes.warning} | Liste bitti, çalmak için biraz daha şarkı ekleyin!` }})
    });

    song.queue.on('songChanged', (oldSong, newSong, skipped, repeatMode) => {
        if(repeatMode){
            message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.repeat} | Tekrarlanan:\n ${oldSong.name}` }})
        } else {
            message.channel.send({embed: {color: client.colors.success, description: `${client.emotes.music} | Şuan çalan:\n ${newSong.name}` }})
        }
    });
}
}
  
module.exports.config = {
  name: "oynat",
  aliases: ['oynat']
}
