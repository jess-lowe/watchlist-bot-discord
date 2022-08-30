const { Client, Collection, GatewayIntentBits } = require("discord.js")

const TOKEN = "MTAxMjk3MTM1MzExNDE1NzEwNw.G6ZKrJ.uWszS9su8oXY2mDV3cGDnrP7GzmCHrOlNNlSeQ"

const client = new Client({ 

    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent] 
    
})

client.on("ready", () => { 
    
    console.log(`Bot - ${client.user.tag}`)

})

let bot = {

    client,
    prefix: "wl",
    owners: ["342383437430128640", "181297889794981888"]

}

client.commands = new Collection();
client.events = new Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.login(TOKEN);