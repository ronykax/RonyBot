import Command from "../../interfaces/Command.js";
import { SlashCommandBuilder } from "discord.js";

const command: Command = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    async execute (client, interaction) {
        await interaction.reply({ content: "Pong! 🏓" });
    }
}

export default command;