const Discord = require("discord.js")
const client = new Discord.Client()

const bio = "discord.gg/devfr"
const role = "ID du role"

client.on("presenceUpdate", async (oldPresence, newPresence) => {
    if (newPresence.activities[0] && newPresence.activities[0].state === bio) {
        if (!newPresence.member.roles.cache.some(r => r.id === role)) {
            newPresence.member.roles.add(role)
        } else {
            if (newPresence.member.roles.cache.some(r => r.id === role)) {
                newPresence.member.roles.remove(role)
            }
        }
    }
})

client.login("Votre token")