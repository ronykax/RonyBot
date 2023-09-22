import { Client, GatewayIntentBits as Intents, Collection, ActivityType } from "discord.js";

import registerCommands from "../handlers/commands.js";
import registerEvents from "../handlers/events.js";

import "dotenv/config";

class RonyBot extends Client {
    commands: Collection<string, any>;

    constructor() {
        super({
            intents: [
                Intents.Guilds,
                Intents.GuildMessages,
                Intents.GuildMembers,
                Intents.MessageContent,
            ],
            presence: {
                status: "dnd",
                activities: [{
                    type: ActivityType.Custom,
                    name: "customstatus",
                    state: "Custom Status"
                }]
            }
        });

        this.commands = new Collection();
    }

    start() {
        registerCommands(this);
        registerEvents(this);

        this.login(process.env.TOKEN);
    }
}

export default RonyBot;