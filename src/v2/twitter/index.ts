import Client from "../../Client";
import { LoggerXD } from "../../utils/Logger";
import Tweets from "./tweets";
import TwitterUsers from "./users";



/**
 * Represents the Twitter API v2 index module.
 */
export default class IndexTwitter {
    /**
     * The Twitter client instance.
     */
    public client: Client;
    /**
     * The Twitter tweets module.
     */
    public tweets: Tweets;
    /**
     * The Twitter users module.
     */
    public users: TwitterUsers;

    /**
     * Creates an instance of IndexTwitter.
     * @param {Client} client - The Twitter client.
     */
    constructor(client: Client) {
        this.client = client;
        this.tweets = new Tweets(client);
        this.users = new TwitterUsers(client);
        
        LoggerXD.info("Twitter / X API v2 loaded :3");
    }
}