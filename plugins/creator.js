const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;XzeeOFC;;;'
                    + 'FN:XzeeOFC\n' // full name
                    + 'ORG:Owner DipaLand Counter;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281381685954:+6281381685954\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Xzee OFC', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler