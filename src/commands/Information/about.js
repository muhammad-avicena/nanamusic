const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: true,
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
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/kxMRCtFJMW")
			);

      const mainPage = new MessageEmbed()
            .setAuthor({ name: 'NanaMusic', iconURL: 'https://media.discordapp.net/attachments/836641517438763087/937189435144044574/481e9b332b74591b28a905b732151ab7.jpg?width=663&height=663'})
            .setThumbnail('https://media.discordapp.net/attachments/836641517438763087/937189435144044574/481e9b332b74591b28a905b732151ab7.jpg?width=663&height=663')
            .setColor('#303236')
            .addField('Creator', '[Blacky#6618](https://github.com/brblacky) And [Venom#9718](https://github.com/Venom9718/)', true)
            .addField('Modified', '[Hideaki-Ryu#0818](https://github.com/hideaki-ryu)', true)
            .addField('Repository', '[Here](https://github.com/brblacky/lavamusic)', true)
            .addField('\u200b',
                `NanaMusic is Cute Discord Bot which has awsome features this bot was designed by [Hideaki-Ryu](https://github.com/hideaki-ryu) and created by Blacky organization - [Blacky](https://github.com/brblacky) and [Venom](https://github.com/Venom9718) Lavalink project - All Credit Goes to them. They really wants to make their first open source project ever. Because they want more for coding experience. In this project, they were challenged to make project with less bugs. Hope you enjoy using NanaMusic! - Feel free to contact me as a designer [Hideaki-Ryu#0818]`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}
