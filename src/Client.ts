import { Axios } from "axios";
import { ApiKeys, Configs, EventEmitterResponse, Image } from "./utils/Interfaces";
import  {LoggerXD as Logger} from "./utils/Logger";
import { EventEmitter } from 'events';
import axios from 'axios';
import IndexDiscord from "./v2/discord";
import IndexTwitter from "./v2/twitter";
import Generate from "./v2/Generate";

/**
 * Represents a client for interacting with an API.
 * @extends EventEmitter
 */
export default class Client extends EventEmitter {
    /**
     * The API keys.
     */
    private apikeys: ApiKeys;
    /**
     * The base URL.
     */
    public baseUrl: string = "https://api.mdcdev.me";
    /**
     * This allows the cache. This can be dangerous, use this only if you know what you are doing. Use setCacheTime(any number) to automatically clean the cache.
     */
    public allowCache: boolean = true;
    /**
     * The cache time in milliseconds.
     */
    public cacheTime: number = 300000;
    /**
     * The cache.
     */
    public cache: Map<string, any> = new Map();
    /**
     * The last cached deleted time.
     */
    public lastCacheTime: number = 0;
    /**
     * Allows comments to be printed in the console.
     */
    public debug: boolean = false;
    /**
     * [WARNING: DANGEROUS] This will make the requests slower, or be rate limited. This can be dangerous, use this only if you know what you are doing.
     */
    public reallyDisableCache: boolean = false;
    /**
     * The Discord API.
     */
    public discord: IndexDiscord;
    /**
     * The Twitter API.
     */
    public twitter: IndexTwitter;
    /**
     * The Twitter API.
     */
    public x: IndexTwitter;
    /**
     * The avatar generator.
     */
    public generateAvatar: Generate;
    public saveImages: boolean = false;
    public saveOn: string = "./img";

    /**
     * Creates an instance of Client.
     * @param {ApiKeys} [apikeys] - The API keys.
     * @param {Configs} [config] - The configuration options.
     */
    constructor(apikeys?: ApiKeys | undefined, config?: Configs | undefined) {
        super();

        if (!apikeys) {
            apikeys = {
                twitter_api_key: "",
                discord_api_key: "",
                any_bot_api_key: "",
                github_api_key: ""
            };
        }
        // REALLY check, adding "" if any key is undefined
        if (!apikeys.twitter_api_key) apikeys.twitter_api_key = "";
        if (!apikeys.discord_api_key) apikeys.discord_api_key = "";
        if (!apikeys.any_bot_api_key) apikeys.any_bot_api_key = "";
        if (!apikeys.github_api_key) apikeys.github_api_key = "";


        if (!config) {
            config = {
                misc: {
                    debug: false,
                    reallyDisableCache: false
                },
                cache: {
                    allowCache: true,
                    cacheTime: 300000
                }
            };
        }
        // the same of up, but with config
        if (!config.misc) {
            config.misc = {
                debug: false,
                reallyDisableCache: false
            };
        }
        // the SAME, but with config.misc
        if (!config.misc.debug) {
            config.misc.debug = false;
        }
        if (!config.misc.reallyDisableCache) {
            config.misc.reallyDisableCache = false;
        }
        if (!config.cache) {
            config.cache = {
                allowCache: true,
                cacheTime: 300000
            };
        }
        // adivina, lo mismo, pero con config.cache, IM CRYING RIGHT NOW
        if (!config.cache.allowCache) {
            config.cache.allowCache = true;
        }
        if (!config.cache.cacheTime) {
            config.cache.cacheTime = 300000;
        }

        this.apikeys = apikeys;
        this.allowCache = config.cache.allowCache;
        this.cacheTime = config.cache.cacheTime;
        this.debug = config.misc.debug;
        this.reallyDisableCache = config.misc.reallyDisableCache;
        this.lastCacheTime = Date.now();

        this.on("response", (response: EventEmitterResponse) => {
            if (this.debug) {
                Logger.info("New response, from local event emitter in url " + response.url);
            }
            if (this.allowCache) {
                this.cache.set(response.url, response.data);
                if (this.debug) {
                    Logger.info("Caching response from " + response.url);
                }
            }
            response.usedCache = false;
        });

        this.discord = new IndexDiscord(this);
        this.twitter = new IndexTwitter(this);
        this.x = this.twitter;
        this.generateAvatar = new Generate(this);
        Logger.info("Client has been initialized");
        // disable axios errors
        axios.interceptors.response.use(response => response, error => {
            return error.response;
        });
    }

    /**
     * Gets the API keys.
     * @returns {ApiKeys} The API keys.
     */
    public getApiKeys(): ApiKeys {
        return this.apikeys;
    }

    /**
     * Sends a fake response event.
     * @returns {EventEmitterResponse} The fake response.
     */
    public hi(): EventEmitterResponse {
        const fakeResponse: EventEmitterResponse = {
            url: "https://api.mdcdev.me/this_route_does_not_exist",
            data: {
                message: "hi there~! <3",
                code: 200,
                usedCache: false
            },
            usedCache: false
        };
        this.emit("response", fakeResponse);
        return fakeResponse;
    }

    public axios = axios;

    /**
     * Sends a request to the API.
     * @param {string} endpoint - The API endpoint.
     * @param {any} [data] - The request data.
     * @returns {Promise<EventEmitterResponse | undefined>} The response from the API.
     */
    public async request(endpoint: string, data?: any): Promise<EventEmitterResponse | undefined> {
        if (this.cache.has(endpoint) && this.allowCache && !this.reallyDisableCache) {
            if (Date.now() - this.lastCacheTime > this.cacheTime) {
                this.cache.clear();
                this.cache = new Map();
                this.lastCacheTime = Date.now();
                Logger.info("Cleaning cache, because cache time has been reached.");
                return this.request(endpoint, data);
            }
            if (this.debug) {
                Logger.info("Request to " + endpoint + " has been cached");
            }
            const responseData: EventEmitterResponse = {
                url: endpoint,
                data: this.cache.get(endpoint),
                usedCache: true
            };
            this.emit("response", responseData);
            return responseData;
        }

        if (this.debug) {
            Logger.info("New request to " + endpoint);
        }
        
        const response = (await this.axios.get(endpoint));
        if ( response.status != 200) {
            Logger.error("Request to " + endpoint + " has failed with status code " + response.status + " and message " + response.statusText);
        } else {
        const type = response.headers["content-type"] || "application/json";
        // rerequest the image, to get their bytes and put in this var
        const imageBytes = type.includes("image") ? await (await this.axios.get(endpoint, { responseType: "arraybuffer" })).data : undefined;
        var image: Image | undefined= type ?
            type.includes("image") ?
                {
                    url: endpoint,
                    name: endpoint.split("/")[endpoint.split("/").length - 2] +"-" +endpoint.split("/")[endpoint.split("/").length - 1],
                    image: imageBytes.toString("base64"),
                }
                : undefined 
        : undefined;
        // save the image, if it's an image, save on ./img/${img.name}.format
        if (image && this.saveImages) {
            const _path = (await import("path"))
            const fs = (await import("fs"));

            // path will be: ./img/${img.name}.format
            // if image.name doesnt ends with any image format, add .png
            if (!image.name?.endsWith(".png") && !image.name?.endsWith(".jpg") && !image.name?.endsWith(".jpeg") && !image.name?.endsWith(".webp") && !image.name?.endsWith(".gif")) {
                image.name += ".png";
            }
            const path = _path.join(__dirname, this.saveOn,`${image.name}`);
            // if img doesnt exists mkdir it
            if (!fs.existsSync(_path.join(__dirname, this.saveOn))) {
                (fs).mkdirSync(_path.join(__dirname, this.saveOn));
            }
            Logger.info("Saving image to " + path);
            
            fs.writeFileSync(path, imageBytes);
        }
        }
        const responseData: EventEmitterResponse = {
            url: endpoint,
            data: await response.data,
            image,

            usedCache: false
        };
        if (!responseData.data ) delete responseData.data;
        if (!responseData.image ) delete responseData.image; else delete responseData.data;

        if (responseData.data === null) responseData.usedCache = false;
        this.emit("response", responseData);

        return responseData;
    }

    /**
     * Disables the cache.
     */
    public disableReallyCache(): void {
        Logger.warning("Disabling cache, this will make the requests slower, or be rate limited. Use this only for debugging purposes.");
        this.reallyDisableCache = true;
    }

    /**
     * Clears the cache.
     */
    public cleanCache(): void {
        Logger.warning("Cleaning cache, may bug the requests, use setCacheTime(any number) to automatically clean the cache.");
        this.cache.clear();
    }

    /**
     * Sets the debug mode.
     * @param {boolean} debug - The debug mode.
     */
    public setDebugMode(debug: boolean): void {
        if (debug === undefined || debug === null) {
            throw new Error("Debug mode cannot be undefined");
        }
        if (typeof debug !== "boolean") {
            throw new Error("Debug mode must be a boolean");
        }
        this.debug = debug;
    }

    /**
     * Sets the cache time.
     * @param {number} time - The cache time in milliseconds.
     */
    public setCacheTime(time: number): void {
        if (time === undefined || time === null) {
            throw new Error("Cache time cannot be undefined");
        }
        if (typeof time !== "number") {
            throw new Error("Cache time must be a number");
        }
        this.allowCache = true;
        if (time < 0) {
            Logger.warning("Disabling cache, this will make the requests slower, or be rate limited. This can be dangerous, use this only if you know what you are doing.");
            this.allowCache = false;
        }
        this.cacheTime = time;
    }
}