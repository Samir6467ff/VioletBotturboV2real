let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/c1f3adc59818e62a90a8f.mp4'
  let { name } = global.db.data.users[who]
m.react('📥')
let str = `                  ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
【..≼قــســم التحميلات≽..】
                   ⋄━───═◞⬪⋇⬪◟═───━⋄

*📖🕯⤺┇〘فيديو〙*
*📖🕯⤺┇〘اغنيه〙*
*📖🕯⤺┇〘شغل〙*
*📖🕯⤺┇〘صورة〙*
*📖🕯⤺┇〘بحث〙*
*📖🕯⤺┇〘تيك〙*
*📖🕯⤺┇〘تيك_صور〙*
*📖🕯⤺┇〘يوتيوب〙*
*📖🕯⤺┇〘فيس〙*
*📖🕯⤺┇〘انستا〙*
*📖🕯⤺┇〘تطبيق〙*
*📖🕯⤺┇〘جيف〙*
*📖🕯⤺┇〘جوجل〙*
*📖🕯⤺┇〘تويتر〙*
*📖🕯⤺┇〘فيلم〙*
*📖🕯⤺┇〘انستا〙*
*📖🕯⤺┇〘تحميل-كتاب〙*
                    ✥━─━⌬ 𝓧𝐂𝙖𝙨𝙥𝙚𝙧𝓧  ⌬━─━✥
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['التحميلات']

export default handler
