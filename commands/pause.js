module.exports = {
    name: "pause",
    aliases: ["pause", "hold"],
    inVoiceChannel: true,
    run: async (client, message, args) => {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if (queue.pause) {
            client.distube.resume(message)
            return message.channel.send("I resumed the song for you!")
        }
        client.distube.pause(message)
        message.channel.send("Done!")
    }
}
