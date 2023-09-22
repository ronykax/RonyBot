import Event from "../interfaces/Event.js";

import { Events } from "discord.js";

const event: Event = {
    name: Events.ClientReady,
    once: true,
    async execute (client) {
        console.log(`${client.user?.tag} is online!`);
    }
}

export default event;