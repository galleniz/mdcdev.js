/**
 * Represents the API keys for various services.
 */
export interface ApiKeys {
    twitter_api_key: string;
    discord_api_key: string;
    any_bot_api_key: string;
    github_api_key: string;

}
/**
 * Represents the configuration options.
 */
export interface GayFont {
    font: string;
    color: string;
    size: number;

}
/**
 * Represents the configuration options, but misc !!!
 */
export interface MiscConfig {
    debug: boolean;
    reallyDisableCache: boolean;
}
/**
 * Represents the configuration options, but, iknow iknow, cache !!!
 */
export interface CacheConfig {
    allowCache: boolean;
    cacheTime: number;
}
/**
 * Why this is called EventEmitterResponse? I don't know, but it's the response of the EventEmitter.
 */
export interface EventEmitterResponse { 
    url: string;
    data: any;
    usedCache: boolean;
}
/**
 * Uy UY UY, this is the config of the client
 */
export interface Configs {
    misc: MiscConfig;
    cache: CacheConfig;
}
/**
 * Im funi, right? :D
 * 
 * Okay, this isnt necessary, but, i like it uwu
 * can you ignore this?
 * please...
 */
export const Si = "no" 