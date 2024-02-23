import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { LoggerXD } from "../../utils/Logger";

/**
 * Represents a class for handling Discord experiments.
 */
export default class DiscordExperiments extends BaseRoot {
    /**
     * Creates a new instance of the DiscordExperiments class.
     * @param client The Discord client.
     */
    constructor(client: Client) {
        // private access to api keys in client
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("DiscordExperiments class has been initialized");
    }

    /**
     * Retrieves all experiments.
     * @returns A promise that resolves to the experiments.
     */
    public async getAll() {
        // yo toda una ingeniera en software:
        return await this.client.request(`https://api.mdcdev.me/v2/discord/experiments/`, "GET");
    }

    /**
     * Retrieves all users participating in experiments.
     * @returns A promise that resolves to the users.
     */
    public async getUsers() {
        return await this.client.request(`https://api.mdcdev.me/v2/discord/experiments/users`, "GET");
    }

    /**
     * Retrieves all guilds participating in experiments.
     * @returns A promise that resolves to the guilds.
     */
    public async getGuilds() {
        return await this.client.request(`https://api.mdcdev.me/v2/discord/experiments/guilds`, "GET");
    }
}