import RonyBot from "../classes/Client.js";
import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

interface Command {
    data: SlashCommandBuilder,
    execute: (client: RonyBot, interaction: ChatInputCommandInteraction) => Promise<void>
}

export default Command;