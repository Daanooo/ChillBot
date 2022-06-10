const { SlashCommandBuilder } = require('@discordjs/builders');
const { Guild, Client } = require('discord.js');
const { guildId } = require('../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('voice-channel')
        .setDescription("Create a voice channel!")
        .addStringOption(option =>
            option.setName('channel-name')
                .setDescription("What should the channel name be?")
                .setRequired(true))
        .addStringOption(option =>
            option.setName('category-name')
                .setDescription("Which category should the channel be in?")
                .setRequired(false)),
    async execute(interaction) {
        const channelName = interaction.options.getString('channel-name');
        const category = interaction.guild.channels.cache.find(cat=> cat.name == interaction.options.getString('category-name') && cat.type == 'GUILD_CATEGORY')

        if (category)
            await interaction.guild.channels.create(channelName, {
                type: 'GUILD_VOICE',
                permissionOverwrites: [{
                    id: interaction.guild.id,
                    allow: ["VIEW_CHANNEL"],
                }]
            } ).then(channel => {
                channel.setParent(category.id)
            })
        else
            await interaction.guild.channels.create(channelName, {
                type: 'GUILD_VOICE',
                permissionOverwrites: [{
                    id: interaction.guild.id,
                    allow: ["VIEW_CHANNEL"],
                }]
            } )
        interaction.reply("Voice Channel Created")
    }
}