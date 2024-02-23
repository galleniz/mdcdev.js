export interface ApiKeys {
    twitter_api_key: string;
    discord_api_key: string;
    any_bot_api_key: string;
    github_api_key: string;

}
export interface GayFont {
    font: string;
    color: string;
    size: number;

}
export interface MiscConfig {
    debug: boolean;
    reallyDisableCache: boolean;
}
export interface CacheConfig {
    allowCache: boolean;
    cacheTime: number;
}
export interface EventEmitterResponse { 
    url: string;
    data: any;
    usedCache: boolean;
}
export interface Configs {
    misc: MiscConfig;
    cache: CacheConfig;
}