import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { LoggerXD } from "../../utils/Logger";

/**
 * Represents a class for interacting with Discord applications.
 */
export default class DiscordApplications extends BaseRoot {
    /**
     * Creates an instance of DiscordApplications.
     * @param {Client} client - The client object.
     */
    constructor(client: Client) {
        // private access to api keys in client
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("DiscordApplications class has been initialized")
    }

    /**
     * Retrieves a Discord application by its ID.
     * @param {string} [id="@me"] - The ID of the Discord application. Defaults to "@me" which represents the current user's application.
     * @returns {Promise<any>} - A promise that resolves with the application data.
     */
    public async get(id: string = "@me"): Promise<any> {
        return await this.client.request(`https://api.mdcdev.me/v2/discord/applications/${id}`, "GET");
    }
}