import Event from "../interfaces/Event.js";
import { Events, CommandInteraction } from "discord.js";

const event: Event = {
    name: Events.InteractionCreate,
    async execute (client, interaction: CommandInteraction) {
        if (interaction instanceof CommandInteraction) {
            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
            }
        }
    }
}

export default event;