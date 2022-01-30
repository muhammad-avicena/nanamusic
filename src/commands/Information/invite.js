const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite Nana Music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
    new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    new MessageButton()
    .setLabel("GitHub")
    .setStyle("LINK")
    .setURL("https://github.com/hideaki-ryu/nanamusic"),
    new MessageButton()
    .setLabel("Discord")
    .setStyle("LINK")
    .setURL("https://discord.gg/kxMRCtFJMW")
			);

          const mainPage = new MessageEmbed()
            .setAuthor({ name: 'Nana Music', iconURL: 'https://media.discordapp.net/attachments/836641517438763087/937189435144044574/481e9b332b74591b28a905b732151ab7.jpg?width=663&height=663'})
            .setThumbnail('https://media.discordapp.net/attachments/836641517438763087/937189435144044574/481e9b332b74591b28a905b732151ab7.jpg?width=663&height=663')
            .setColor('#303236')
            .addField('invite Nana music', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
}
