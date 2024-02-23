import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { LoggerXD } from "../../utils/Logger";

/**
 * Represents a class for interacting with Discord users.
 */
export default class DiscordUsers extends BaseRoot {
    /**
     * Creates an instance of DiscordUsers.
     * @param {Client} client - The client object.
     */
    constructor(client: Client) {
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("DiscordUsers class has been initialized");
    }

    /**
     * Retrieves information about a Discord user.
     * @param {string} [id="@me"] - The ID of the user. Defaults to the current user.
     * @returns {Promise<any>} - A promise that resolves with the user information.
     */
    public async get(id: string = "@me"): Promise<any> {
        return await this.client.request(`https://api.mdcdev.me/v2/discord/users/${id}`, "GET");
    }

    /**
     * Retrieves the avatar of a Discord user.
     * @param {string} [username="@me"] - The username of the user. Defaults to the current user.
     * @returns {Promise<any>} - A promise that resolves with the avatar image.
     */
    public async avatar(username: string = "@me"): Promise<any> {
        const res = await this.client.request(`https://api.mdcdev.me/v2/discord/users/${username}/avatar`, "GET");
        delete res?.data;
        return res;
    }

    /**
     * Retrieves the banner of a Discord user.
     * @param {string} [username="@me"] - The username of the user. Defaults to the current user.
     * @returns {Promise<any>} - A promise that resolves with the banner image.
     */
    public async banner(username: string = "@me"): Promise<any> {
        const res = await this.client.request(`https://api.mdcdev.me/v2/discord/users/${username}/banner`, "GET");
        delete res?.data;
        return res;
    }
}