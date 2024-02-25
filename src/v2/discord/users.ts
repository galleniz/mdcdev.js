import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { User } from "../../utils/Interfaces";
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
     */
    public async get(id: string = "@me") {
        return await this.client.request<User, string>(`https://api.mdcdev.me/v2/discord/users/${id}`, "GET");
    }

    /**
     * Retrieves the avatar of a Discord user.
     * @param {string} [username="@me"] - The username of the user. Defaults to the current user.
     */
    public async avatar(username: string = "@me") {
        const res = await this.client.request<User, string>(`https://api.mdcdev.me/v2/discord/users/${username}/avatar`, "GET");
        return res;
    }

    /**
     * Retrieves the banner of a Discord user.
     * @param {string} [username="@me"] - The username of the user. Defaults to the current user.
     */
    public async banner(username: string = "@me") {
        const res = await this.client.request<User, string>(`https://api.mdcdev.me/v2/discord/users/${username}/banner`, "GET");
        return res;
    }
}