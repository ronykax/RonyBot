import RonyBot from "../classes/Client.js";
import { REST, Routes } from "discord.js";
import { readdirSync } from "fs";

async function registerCommands(client: RonyBot) {
    const commands: object[] = [];

    const folders = readdirSync("./dist/commands");

    for (const folder of folders) {
        const files = readdirSync(`./dist/commands/${folder}`);

        for (const file of files) {
            const module = await import(`../commands/${folder}/${file}`);
            const command = module.default;

            client.commands.set(command.data.name, command);
            commands.push(command.data.toJSON());
        }
    }

    const rest = new REST({ version: "10" }).setToken(`${process.env.TOKEN}`);

    await rest.put(
        Routes.applicationGuildCommands(`${process.env.CLIENTID}`, `${process.env.GUILDID}`),
        { body: commands }
    );
}

export default registerCommands;