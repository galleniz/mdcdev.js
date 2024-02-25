import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { Tweet } from "../../utils/Interfaces";
import { LoggerXD } from "../../utils/Logger";

/**
 * Represents a class for interacting with Twitter tweets.
 * @class
 * @extends BaseRoot
 */
export default class Tweets extends BaseRoot {
    /**
     * Creates an instance of the Tweets class.
     * @constructor
     * @param {Client} client - The client object used for making API requests.
     */
    constructor(client: Client) {
        // private access to api keys in client
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("Tweets class has been initialized");
    }

    /**
     * Retrieves a tweet by its ID.
     * @param {string} [id=""] - The ID of the tweet to retrieve.
     */
    public async get(id: string = "") {
        return await this.client.request<Tweet, string>(`https://api.mdcdev.me/v2/twitter/tweets/${id}`, "GET");
    }

}