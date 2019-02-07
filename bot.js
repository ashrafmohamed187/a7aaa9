const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("542880960476217345")
setInterval(function() {
channel.send(`ana krm el kmt maly4 7dod b7b el gwafa f45ooooooooooola 7ta ana spamer ebn wes5a (asdy el bot m4 ana) ana bot kmt nar b7b el mngnez kol youm kmt naaaaaaaaaaaaaaaaaaaaaaaaaaaaar BS LO T3RFO ANA BOT kmtan w b7b el bdan 34an ana bdan mabdon bagyb flos bdan bnt abo el bdna a7a a7o edy el wad l abo w a7a mlk4 d3awa tyzk mlayna tyz gowaha tyz lbsa tyz 3lyha sos tyaz klb a7aaaaaaaaaaaaaaa 2o7aaaaaaaaaaaaaaaaaaa tyyyyyyyyyyyyyyyyyyyyyyyyyz mlk4 d3waaaaa 55555555555555555555555555555555555555555555555555555555555555555555555555555 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);