const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()
if (process.env.LOGIN_TOKEN) {
    LOGIN_TOKEN = process.env.LOGIN_TOKEN
}

client.login(LOGIN_TOKEN)

client.on('message', async message => {
    if (message.author.username.toLowerCase().includes('toy')) {
        const toyMsg = message.content
        if (toyMsg.includes('pornhub') || toyMsg.includes('youjizz')) {
            console.log(message.author.username, toyMsg)
            let toyRole = message.guild.roles.cache.find(r => r.name === 'ไอหน้าโง่ทอยโดน')
            let toy = message.member
            try {
                await message.delete({ timeout: 3000 })
            } catch (error) {
                console.log('no msg found')
            }
            toy.roles.add(toyRole)
            setTimeout(function () {
                toy.roles.remove(toyRole).catch(() => console.log('No role found'))
            }, 300000)
        }
    }
})
