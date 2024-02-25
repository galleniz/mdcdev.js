import BaseRoot from "../BaseRoot";
import Client from "../Client";
import { GayFont } from "../utils/Interfaces";
import { LoggerXD } from "../utils/Logger";

/**
 * Represents a class for generating avatars.
 * @extends BaseRoot
 */
export default class Generate extends BaseRoot {
    /**
     * Constructs a new instance of the Generate class.
     * @param {Client} client - The client object.
     */
    constructor(client: Client) {
        super(client.getApiKeys(), client);
        if (this.client.debug)
        LoggerXD.info("Generate Avatar class has been initialized");
    }

    /**
     * Generates an avatar with the specified parameters.
     * @param {string} text - The text to be displayed on the avatar.
     * @param {string} [color] - The background color of the avatar.
     * @param {number} [size] - The size of the avatar.
     * @param {GayFont} [font] - The font settings for the text on the avatar.
     */
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