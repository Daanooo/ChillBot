const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pong')
        .setDescription("Ping!!"),
    async execute(interaction) {
        await interaction.reply('Ping!');
    }
}