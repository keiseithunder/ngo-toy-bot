const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()
if (process.env.LOGIN_TOKEN) {
    LOGIN_TOKEN = process.env.LOGIN_TOKEN
}

client.login(LOGIN_TOKEN)

client.on('message',async message => {
    if (message.author.username.toLowerCase().includes('toy')) {
        if (message.content.match(/(pornhub)?(youjizz)?/g)) {
            let toyRole = message.guild.roles.cache.find(r => r.name === 'ไอหน้าโง่ทอยโดน')
            let toy = message.member
            await message.delete({timeout:3000})
            toy.roles.add(toyRole)
            setTimeout(function () {
                toy.roles.remove(toyRole)
            }, 300000)
        }
    }
})
