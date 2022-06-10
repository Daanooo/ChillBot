const { guildId } = require('../config.json');

module.exports = {
    name: 'ready',
    once: true,
    
    execute(client) {
        (async () => {
            const guild = await client.guilds.fetch(guildId);

            const commands = await guild.commands.fetch()
        })();

        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};