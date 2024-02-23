import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
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
     * @param {string} [username="@me"] - The username of the Twitter user. Defaults to "@me" which represents the authenticated user.
     * @returns {Promise<any>} - A promise that resolves with the user information.
     */
    public async get(username: string = "@me"): Promise<any> {
        return await this.client.request(`https://api.mdcdev.me/v2/twitter/users/${username}`, "GET");
    }

    /**
     * Retrieves the avatar of a Twitter user.
     * @param {string} [username="@me"] - The username of the Twitter user. Defaults to "@me" which represents the authenticated user.
     * @returns {Promise<any>} - A promise that resolves with the avatar image data.
     */
    public async avatar(username: string = "@me"): Promise<any> {
        const res = await this.client.request(`https://api.mdcdev.me/v2/twitter/users/${username}/avatar`, "GET");
        return res;
    }

    /**
     * Retrieves the banner image of a Twitter user.
     * @param {string} [username="@me"] - The username of the Twitter user. Defaults to "@me" which represents the authenticated user.
     * @returns {Promise<any>} - A promise that resolves with the banner image data.
     */
    public async banner(username: string = "@me"): Promise<any> {
        const res = await this.client.request(`https://api.mdcdev.me/v2/twitter/users/${username}/banner`, "GET");
        return res;
    }
}