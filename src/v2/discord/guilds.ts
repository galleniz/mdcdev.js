import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { LoggerXD } from "../../utils/Logger";

export default class DiscordGuilds extends BaseRoot {
    constructor(client: Client) {
        // private access to api keys in client
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("DiscordGuilds class has been initialized");

    }

    public async get(id: string = "@me") {
        // yo toda una ingeniera en software:
        return await this.client.request(`https://api.mdcdev.me/v2/discord/guilds/${id}`, "GET");
    }

}