const Discord = require('discord.js');
const utils = require('../../functions/utils.js');

module.exports.run = async (bot, message, args, server_name) => {
	if (!args[0]) return utils.noReason(message, 'Пустотный эмодзи???')
    if (args[0].match(/<:\w+:\d+>/)) args[0] = args[0].slice(2).slice(0, -20)
    if (!message.guild.emojis.find('name', args[0])) return utils.noReason(message, 'Я не могу найти эмодзи "' + args[0] + '"');
    let emoji = message.guild.emojis.find('name', args[0]);
    emoji.fetchAuthor().then(author => {
        const embed = new Discord.RichEmbed()
	        .setTitle(`Эмодзи ${emoji}`)
	        .setColor(`ffd500`)
	        .setThumbnail(emoji.url)
	        .addField(`Имя`, emoji.name, true)
	        .addField(`Приватен для?`, `${emoji.roles.size} ролей`, true)
	        .addField(`Добавил`, author.tag, true)
	        .addField(`Дата добавления`, emoji.createdAt.toString().slice(4, -15), true)
	        .addField(`Анимированный?`, (emoji.animated?`Да`:`Нет`), true)
	        .addField(`Ссылка`, emoji.url, true)
        message.channel.send({embed})
    })
}