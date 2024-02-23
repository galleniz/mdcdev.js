import Client from "./Client";
import { ApiKeys } from "./utils/Interafces";
import  Requester from "./Requester";

/**
 * Represents the base root class.
 */
export default class BaseRoot extends Requester { 
    private apikeys: ApiKeys;
    
    /**
     * Creates an instance of BaseRoot.
     * @param apikeys - The API keys.
     * @param client - The client.
     */
    constructor(apikeys: ApiKeys, client: Client) {
        super(client);

        this.apikeys = apikeys;
    }
    
    /**
     * Gets the API keys.
     * @returns The API keys.
     */
    public getApiKeys(): ApiKeys {
        return this.apikeys;
    }
}