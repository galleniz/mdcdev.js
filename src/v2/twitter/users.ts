import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { TwitterUser } from "../../utils/Interfaces";
import { LoggerXD } from "../../utils/Logger";

/**
 * Represents a class for interacting with Twitter users.
 * @class
 * @extends BaseRoot
 */
export default class TwitterUsers extends BaseRoot {
    /**
     * Creates an instance of TwitterUsers.
     * @constructor
     * @param {Client} client - The client object used for making API requests.
     */
    constructor(client: Client) {
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("TwitterUsers class has been initialized");
    }

    /**
     * Retrieves information about a Twitter user.
     * @param {string} [username="@mdc_dev"] - The username of the Twitter user. Defaults to "@mdc_dev" which represents the authenticated user.
     */
    public async get(username: string = "mdc_dev") {
        return await this.client.request<TwitterUser, string>(`https://api.mdcdev.me/v2/twitter/users/${username}`, "GET");
    }

    /**
     * Retrieves the avatar of a Twitter user.
     * @param {string} [username="@mdc_dev"] - The username of the Twitter user. Defaults to "@mdc_dev" which represents the authenticated user.
     */
    public async avatar(username: string = "mdc_dev") {
        const res = await this.client.request<TwitterUser, string>(`https://api.mdcdev.me/v2/twitter/users/${username}/avatar`, "GET");
        return res;
    }

    /**
     * Retrieves the banner image of a Twitter user.
     * @param {string} [username="@mdc_dev"] - The username of the Twitter user. Defaults to "@mdc_dev" which represents the authenticated user.
     */
    public async banner(username: string = "mdc_dev") {
        const res = await this.client.request<TwitterUser, string>(`https://api.mdcdev.me/v2/twitter/users/${username}/banner`, "GET");
        return res;
    }
}