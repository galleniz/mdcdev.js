import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { LoggerXD } from "../../utils/Logger";

export default class TwitterUsers extends BaseRoot {
    constructor(client: Client) {
        // private access to api keys in client
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("TwitterUsers class has been initialized");
    }

    public async get(username: string = "@me") {
        // yo toda una ingeniera en software:
        return await this.client.request(`https://api.mdcdev.me/v2/twitter/users/${username}`, "GET");
    }
    public async avatar(username: string = "@me") {
        const res = await this.client.request(`https://api.mdcdev.me/v2/twitter/users/${username}/avatar`, "GET");
        delete res?.data
        return res;
    }
    public async banner(username: string = "@me")  {
        const res = await this.client.request(`https://api.mdcdev.me/v2/twitter/users/${username}/banner`, "GET");
        delete res?.data
        return res;
    }
}