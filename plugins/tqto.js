/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = async (m) => {
    bear = "THANKS ALL"
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `
*BIG THANKS TO*

Frendy: 
https://wa.me/+6289514712995
XzeeOFC: 
https://wa.me/+6281381685954
Ariffb: 
https://github.com/Ariffb25
MhankBarBar: 
https://github.com/MhankBarBar
XzeeGH: 
https://github.com/XzeeBotz
ilham: 
https://github.com/Ilhamskhzyi

`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: tqto,
           locationMessage: { 
           jpegThumbnail: await (await fetch(fla + bear)).buffer() }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙶𝙴𝚃 𝙱𝙾𝚃',
               url: `${ApiiKey}`
             }

           },
       
               {
             quickReplyButton: {
               displayText: '𝙱𝙰𝙲𝙺 𝚃𝙾 𝙼𝙴𝙽𝚄',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i

module.exports = handler
