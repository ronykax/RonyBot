import RonyBot from "../classes/Client.js";
import { readdirSync } from "fs";

async function registerEvents(client: RonyBot) {
    const files = readdirSync("./dist/events");

    for (const file of files) {
        const module = await import(`../events/${file}`);
        const event = module.default;

        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args, client));
        } else {
            client.on(event.name, (...args) => event.execute(...args, client));
        }
    }
}

export default registerEvents;