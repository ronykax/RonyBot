import RonyBot from "../classes/Client.js";
import { ClientEvents } from "discord.js";

interface Event {
    name: keyof ClientEvents,
    once?: boolean,
    execute: (client: RonyBot, ...args: any) => void
}

export default Event;