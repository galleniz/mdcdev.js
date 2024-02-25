import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { Guild } from "../../utils/Interfaces";
import { LoggerXD } from "../../utils/Logger";

/**
 * Represents a class for interacting with Discord guilds.
 * @class
 * @extends BaseRoot
 */
export default class DiscordGuilds extends BaseRoot {
    /**
     * Creates an instance of DiscordGuilds.
     * @constructor
     * @param {Client} client - The client object.
     */
    constructor(client: Client) {
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("DiscordGuilds class has been initialized");
    }

    /**
     * Retrieves information about a Discord guild.
     * @param {string} [id="949096817050648636"] - The ID of the guild. Defaults to "949096817050648636" which represents the current user's guild.
     */
    public async get(id: string = "949096817050648636") {
        return await this.client.request<Guild, string>(`https://api.mdcdev.me/v2/discord/guilds/${id}`, "GET");
    }
}