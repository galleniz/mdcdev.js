import BaseRoot from "../BaseRoot";
import Client from "../Client";
import { GayFont } from "../utils/Interafces";
import { LoggerXD } from "../utils/Logger";

export default class Generate extends BaseRoot {
    constructor(client: Client) {
        // private access to api keys in client
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("Generate Avatar class has been initialized");
    }

    public async generate(text: string = "Niz", color?: string, size?: number, font?: GayFont) {
        const params = new URLSearchParams([
            font?.color ? ["fontcolor", font.color] : [],
            color ? ["backgroundcolor", color] : [],
            size ? ["size", size.toString()] : [],
            font?.font ? ["font", font.font] : [],
            font?.size ? ["fontsize", font.size.toString()] : []
        ]);

        const response = await this.client.request(`https://api.mdcdev.me/v2/avatar-generator/${text}?${params.toString()}`, "GET");

        if (response) {
            delete response.data;
        }

        return response;
    }
}