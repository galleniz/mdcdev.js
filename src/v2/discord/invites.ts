import BaseRoot from "../../BaseRoot";
import Client from "../../Client";
import { Invite } from "../../utils/Interfaces";
import { LoggerXD } from "../../utils/Logger";

export default class DiscordInvites extends BaseRoot {
    constructor(client: Client) {
        // private access to api keys in client
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("DiscordInvites class has been initialized");
    }

    public async get(code: string = "dae") {
        // yo toda una ingeniera en software:
        return await this.client.request<Invite, string>(`https://api.mdcdev.me/v2/discord/invites/${code}`, "GET");
    }

}