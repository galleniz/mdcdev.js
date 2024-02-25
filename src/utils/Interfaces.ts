/**
 * Interface for the application route from dicord
 * */
export interface Application {
    createdAt: string;
    createdAtTimestamp: number;
    customInstallURL: string;
    description: string;
    flags: string[];
    guildId: string;
    hook: boolean;
    icon: string;
    iconURL: string;
    iconURLs: {
        16: string;
        32: string;
        64: string;
        128: string;
        256: string;
        512: string;
        1024: string;
        2048: string;
        4096: string;
    };
    id: string;
    isBotPublic: boolean;
    isBotRequireCodeGrant: boolean;
    name: string;
    privacyPolicyURL: string;
    publicFlags: number;
    summary: string;
    tags: string[];
    termsOfServiceURL: string;
    type: any;
    user: User;
    verifyKey: string;
}
/**
 * experiments route -- https://api.mdcdev.me/v2/discord/experiments/
 * ex for response (is dynamic, due the size of array)

 */
export interface SingleExperiment {
    id: string;
    defaultConfig: {
        enabled: boolean;
        favoritesEnabled: boolean;
        canShow: boolean;
    };
    rollout: {
        revision: number;
        populations: {
            position: {
                treatment: string;
                bucket: number;
                rollouts: {
                    start: number;
                    end: number;
                }[];
            }[];
            filters: any[];
        }[];
        overrides: any[];
        overrides_formatted: {
            position: {
                treatment: string;
                bucket: number;
                rollouts: {
                    start: number;
                    end: number;
                }[];
            }[];
            filters: {
                type: string;
                flags: number[];
                id: string;
            }[];
        }[];
    };
    hash: number;
    creationDate: number;
    type: string;
    title: string;
    description: string[];
    buckets: number[];

}
/**
 * Represents the guild data,
 * example:
 * {"AFKChannelID":null,"AFKTimeout":300,"applicationId":null,"approximateMemberCount":12,"approximatePresenceCount":5,"banner":null,"createdAt":"2023-12-22T14:03:30.759Z","createdTimestamp":1703253810759,"defaultMessageNotifications":1,"description":null,"discoverySplash":null,"embed_channel_id":null,"embed_enabled":false,"embedChannelId":null,"embedEnabled":false,"emojis":[],"explicitContentFilter":2,"features":["COMMUNITY","GUESTS_ENABLED","NEWS"],"homeHeader":null,"hubType":null,"icon":"882fd19d8717e445d0f7aae9f7406dc4","iconURL":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=1024","iconURLs":{"16":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=16","32":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=32","64":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=64","128":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=128","256":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=256","512":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=512","1024":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=1024","2048":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=2048","4096":"https://cdn.discordapp.com/icons/1187757312480383097/882fd19d8717e445d0f7aae9f7406dc4.webp?size=4096"},"id":"1187757312480383097","incidents_data":null,"inventory_settings":null,"latestOnboardingQuestionId":null,"max_stage_video_channel_users":50,"maxMembers":500000,"maxPresences":500000,"maxStageVideoChannelUsers":1,"maxVideoChannelUsers":1,"mfaLevel":0,"name":"Testing Bot Server","nsfw":false,"nsfwLevel":0,"owner":{"accentColor":0,"avatar":"ff7040a5b1b3b5c57c1d9135fbb24822","avatarDecoration":"a_10b9f886b513b77ccdd67c8784f1a496","avatarDecorationURL":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=1024","avatarDecorationURLs":{"16":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=16","32":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=32","64":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=64","128":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=128","256":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=256","512":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=512","1024":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=1024","2048":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=2048","4096":"https://cdn.discordapp.com/avatar-decoration-presets/a_10b9f886b513b77ccdd67c8784f1a496.png?size=4096"},"avatarURL":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=1024","avatarURLs":{"16":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=16","32":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=32","64":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=64","128":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=128","256":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=256","512":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=512","1024":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=1024","2048":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=2048","4096":"https://cdn.discordapp.com/avatars/482637805034668032/ff7040a5b1b3b5c57c1d9135fbb24822.webp?size=4096"},"banner":null,"bannerColor":"#000000","bannerURL":null,"createdAt":"2018-08-24T19:50:19.697Z","createdAtTimestamp":1535140219697,"discriminator":"0","flags":4194560,"formedFlags":["ACTIVE_DEVELOPER","HOUSE_BALANCE"],"globalName":"GalletaNiz","id":"482637805034668032","isBot":false,"isSystem":false,"premiumType":0,"publicFlags":4194560,"raw":{"accent_color":0,"avatar":"ff7040a5b1b3b5c57c1d9135fbb24822","avatar_decoration_data":{"asset":"a_10b9f886b513b77ccdd67c8784f1a496","sku_id":"1144059132517826601"},"banner":null,"banner_color":"#000000","discriminator":"0","flags":4194560,"global_name":"GalletaNiz","id":"482637805034668032","premium_type":0,"public_flags":4194560,"username":"galleniz"},"tag":"galleniz#0","username":"galleniz"},"ownerId":"482637805034668032","preferredLocale":"en-US","premiumProgressBar":false,"premiumSubscriptionCount":0,"premiumTier":0,"publicUpdatesChannelId":"1203086141079945267","region":"us-central","roles":[{"id":"1187757312480383097","name":"@everyone","description":null,"permissions":["CREATE_INSTANT_INVITE","ADD_REACTIONS","STREAM","VIEW_CHANNEL","SEND_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","USE_VAD","CHANGE_NICKNAME","USE_APPLICATION_COMMANDS","REQUEST_TO_SPEAK","CREATE_PUBLIC_THREADS","CREATE_PRIVATE_THREADS","USE_EXTERNAL_STICKERS","SEND_MESSAGES_IN_THREADS","USE_EMBEDDED_ACTIVITIES","USE_SOUNDBOARD"],"position":0,"color":0,"icon":null,"flags":[],"createdAt":"2023-12-22T14:03:30.759Z","createdTimestamp":1703253810759,"isHoisted":false,"isManaged":false,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"533235326373441"},{"id":"1187771490620424318","name":"Disc-Embed-Bot-1","description":null,"permissions":["ADMINISTRATOR"],"position":8,"color":0,"icon":null,"tags":{"botId":"1187756920451367045"},"flags":[],"createdAt":"2023-12-22T14:59:51.091Z","createdTimestamp":1703257191091,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"8"},{"id":"1188615634767052810","name":"DEV","description":null,"permissions":["ADMINISTRATOR","PRIORITY_SPEAKER","STREAM","SEND_TTS_MESSAGES","MANAGE_MESSAGES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","USE_APPLICATION_COMMANDS","MANAGE_EVENTS","MANAGE_THREADS","USE_EXTERNAL_STICKERS","USE_EMBEDDED_ACTIVITIES","USE_SOUNDBOARD"],"position":10,"color":15844367,"icon":null,"flags":[],"createdAt":"2023-12-24T22:54:10.739Z","createdTimestamp":1703458450739,"isHoisted":true,"isManaged":false,"isMentionable":false,"unicodeEmoji":null,"colorHex":"#f1c40f","colorRGB":"rgb(241, 196, 15)","publicFlags":0,"publicPermissions":"409733504119560"},{"id":"1188615753121939537","name":"nuevo rol 1","description":null,"permissions":[],"position":6,"color":10181046,"icon":null,"flags":[],"createdAt":"2023-12-24T22:54:38.957Z","createdTimestamp":1703458478957,"isHoisted":false,"isManaged":false,"isMentionable":false,"unicodeEmoji":null,"colorHex":"#9b59b6","colorRGB":"rgb(155, 89, 182)","publicFlags":0,"publicPermissions":"0"},{"id":"1188615777067216937","name":"nuevo rol 2","description":null,"permissions":[],"position":5,"color":3447003,"icon":null,"flags":[],"createdAt":"2023-12-24T22:54:44.666Z","createdTimestamp":1703458484666,"isHoisted":false,"isManaged":false,"isMentionable":false,"unicodeEmoji":null,"colorHex":"#3498db","colorRGB":"rgb(52, 152, 219)","publicFlags":0,"publicPermissions":"0"},{"id":"1188615798999232563","name":"nuevo rol 3","description":null,"permissions":[],"position":4,"color":7419530,"icon":null,"flags":[],"createdAt":"2023-12-24T22:54:49.895Z","createdTimestamp":1703458489895,"isHoisted":false,"isManaged":false,"isMentionable":false,"unicodeEmoji":null,"colorHex":"#71368a","colorRGB":"rgb(113, 54, 138)","publicFlags":0,"publicPermissions":"0"},{"id":"1188957037200162921","name":"WeBOT","description":null,"permissions":["ADMINISTRATOR"],"position":9,"color":0,"icon":null,"tags":{"botId":"1188953046378618991"},"flags":[],"createdAt":"2023-12-25T21:30:47.422Z","createdTimestamp":1703539847422,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"8"},{"id":"1189415458860961824","name":"MDC Bot","description":null,"permissions":["CREATE_INSTANT_INVITE","KICK_MEMBERS","BAN_MEMBERS","MANAGE_CHANNELS","ADD_REACTIONS","PRIORITY_SPEAKER","STREAM","VIEW_CHANNEL","SEND_MESSAGES","SEND_TTS_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","VIEW_GUILD_INSIGHTS","CONNECT","SPEAK","MUTE_MEMBERS","DEAFEN_MEMBERS","MOVE_MEMBERS","USE_VAD","CHANGE_NICKNAME","MANAGE_NICKNAMES","MANAGE_ROLES","MANAGE_WEBHOOKS","MANAGE_EMOJIS","USE_APPLICATION_COMMANDS","REQUEST_TO_SPEAK","MANAGE_THREADS","CREATE_PUBLIC_THREADS","CREATE_PRIVATE_THREADS","USE_EXTERNAL_STICKERS","SEND_MESSAGES_IN_THREADS","USE_EMBEDDED_ACTIVITIES"],"position":7,"color":0,"icon":null,"tags":{"botId":"1070432769227886644"},"flags":[],"createdAt":"2023-12-27T03:52:23.663Z","createdTimestamp":1703649143663,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"1090921693015"},{"id":"1192965851092111476","name":"CatBot","description":null,"permissions":["ADD_REACTIONS","VIEW_CHANNEL","SEND_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","USE_EXTERNAL_EMOJIS","CHANGE_NICKNAME","USE_APPLICATION_COMMANDS","USE_EXTERNAL_STICKERS","SEND_MESSAGES_IN_THREADS"],"position":3,"color":0,"icon":null,"tags":{"botId":"1192955560379813959"},"flags":[],"createdAt":"2024-01-05T23:00:23.134Z","createdTimestamp":1704495623134,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"414531832896"},{"id":"1194812673867661384","name":"Want","description":null,"permissions":["ADMINISTRATOR"],"position":2,"color":0,"icon":null,"tags":{"botId":"1083889866955309106"},"flags":[],"createdAt":"2024-01-11T01:18:59.996Z","createdTimestamp":1704935939996,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"8"},{"id":"1194815934192422987","name":"Nai - Image Generation AI","description":null,"permissions":["ADD_REACTIONS","VIEW_CHANNEL","SEND_MESSAGES","MANAGE_MESSAGES","EMBED_LINKS","ATTACH_FILES","READ_MESSAGE_HISTORY","MENTION_EVERYONE","USE_EXTERNAL_EMOJIS","USE_APPLICATION_COMMANDS","MANAGE_THREADS","CREATE_PUBLIC_THREADS","CREATE_PRIVATE_THREADS","USE_EXTERNAL_STICKERS","SEND_MESSAGES_IN_THREADS"],"position":1,"color":0,"icon":null,"tags":{"botId":"1054891522786611231"},"flags":[],"createdAt":"2024-01-11T01:31:57.318Z","createdTimestamp":1704936717318,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"534723947584"},{"id":"1203085552539148342","name":"FunkinBot","description":null,"permissions":["ADMINISTRATOR"],"position":1,"color":0,"icon":null,"tags":{"botId":"1190508484299608204"},"flags":[],"createdAt":"2024-02-02T21:12:27.974Z","createdTimestamp":1706908347974,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"8"},{"id":"1211091841458638891","name":"Any Bot Canary","description":null,"permissions":["ADMINISTRATOR"],"position":1,"color":0,"icon":null,"tags":{"botId":"920820898217488415"},"flags":[],"createdAt":"2024-02-24T23:26:36.002Z","createdTimestamp":1708817196002,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"8"},{"id":"1211100523684696067","name":"api.mdcdev.me","description":null,"permissions":["VIEW_CHANNEL","VIEW_GUILD_INSIGHTS","CHANGE_NICKNAME"],"position":1,"color":0,"icon":null,"tags":{"botId":"1145470626178535625"},"flags":[],"createdAt":"2024-02-25T00:01:06.006Z","createdTimestamp":1708819266006,"isHoisted":false,"isManaged":true,"isMentionable":false,"unicodeEmoji":null,"colorHex":null,"colorRGB":null,"publicFlags":0,"publicPermissions":"67634176"}],"rulesChannelId":"1203086141079945266","safetyAlertsChannelId":null,"splash":null,"stickers":[],"systemChannelFlags":0,"systemChannelId":"1187757313205993582","vanityCode":null,"verificationLevel":1,"widget":false,"widgetChannelId":null} 
 * the emojis section is an array, with resolutions like
 * [
 *     1024: {
 *        id: "123123123123123123",
 *       name: "emoji_name",
 *      animated: false
 * 
 *     }
 * ]
 */
export interface Guild {
    AFKChannelID: string;
    AFKTimeout: number;
    applicationId: string;
    approximateMemberCount: number;
    approximatePresenceCount: number;
    banner: string;
    createdAt: string;
    createdTimestamp: number;
    defaultMessageNotifications: number;
    description: string;
    discoverySplash: string;
    embed_channel_id: string;
    embed_enabled: boolean;
    embedChannelId: any;
    embedEnabled: boolean;
    emojis: {
        [key: string]: {
            id: string;
            name: string;
            animated: boolean;
        };
    };
    explicitContentFilter: number;
    features: string[];
    homeHeader: any;
    hubType: any;
    icon: string;
    iconURL: string;
    iconURLs: {
        16: string;
        32: string;
        64: string;
        128: string;
        256: string;
        512: string;
        1024: string;
        2048: string;
        4096: string;
    };
    id: string;
    incidents_data: any;
    inventory_settings: any;
    latestOnboardingQuestionId: any;
    max_stage_video_channel_users: number;
    maxMembers: number;
    maxPresences: number;
    maxStageVideoChannelUsers: number;
    maxVideoChannelUsers: number;
    mfaLevel: number;
    name: string;
    nsfw: boolean;
    nsfwLevel: number;
    owner: User;
    ownerId: string;
    preferredLocale: string;
    premiumProgressBar: boolean;
    premiumSubscriptionCount: number;
    premiumTier: number;
    publicUpdatesChannelId: string;
    region: string;
    roles: {
        id: string;
        name: string;
        description: any;
        permissions: string[];
        position: number;
        color: number;
        icon: any;
        flags: any[];
        createdAt: string;
        createdTimestamp: number;
        isHoisted: boolean;
        isManaged: boolean;
        isMentionable: boolean;
        unicodeEmoji: any;
        colorHex: any;
        colorRGB: any;
        publicFlags: number;
        publicPermissions: string;
        tags?: {
            botId: string;
        };
    }[];
    rulesChannelId: string;
    safetyAlertsChannelId: any;
    splash: any;
}
export interface User{
    accentColor: any;
    avatar: string;
    avatarDecorationURL: any;
    avatarURL: string;
    avatarURLs: {
        16: string;
        32: string;
        64: string;
        128: string;
        256: string;
        512: string;
        1024: string;
        2048: string;
        4096: string;
    };
    banner: any;
    bannerColor: any;
    bannerURL: any;
    createdAt: string;
    createdAtTimestamp: number;
    discriminator: string;
    flags: number;
    formedFlags: string[];
    globalName: any;
    id: string;
    isBot: boolean;
    isSystem: boolean;
    premiumType: number;
    publicFlags: number;
    raw: {
        accent_color: any;
        avatar: string;
        avatarDecorationData: any;
        banner: any;
        bannerColor: any;
        bot: boolean;
        discriminator: string;
        flags: number;
        globalName: any;
        id: string;
        premiumType: number;
        publicFlags: number;
        username: string;
    };
    tag: string;
    username: string;
};
/**
 * invite data
 * ex: 
 * {"approximateMemberCount":1410,"approximatePresenceCount":416,"channel":{"createdAt":"2022-03-04T00:11:54.638Z","createdAtTimestamp":1646352714638,"id":"949096817415565371","name":"『📜』reglas","type":0},"code":"dae","expiresAt":"2025-02-24T00:06:53.208Z","expiresAtTimestamp":-1,"expiresIn":-1,"guild":{"banner":"d3071c6e82ab75512ea213d4446e34d3","bannerURL":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=1024","bannerURLs":{"16":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=16","32":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=32","64":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=64","128":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=128","256":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=256","512":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=512","1024":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=1024","2048":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=2048","4096":"https://cdn.discordapp.com/banners/949096817050648636/d3071c6e82ab75512ea213d4446e34d3.webp?size=4096"},"createdAt":"2022-03-04T00:11:54.551Z","createdAtTimestamp":1646352714551,"description":"Servidor dedicado a programación , desarrollo artistico canales de programación, dibujo, arte y música.","features":["ANIMATED_BANNER","ANIMATED_ICON","AUTO_MODERATION","BANNER","CHANNEL_ICON_EMOJIS_GENERATED","COMMUNITY","DISCOVERABLE","ENABLED_DISCOVERABLE_BEFORE","GUILD_ONBOARDING","GUILD_ONBOARDING_EVER_ENABLED","GUILD_ONBOARDING_HAS_PROMPTS","GUILD_SERVER_GUIDE","GUILD_WEB_PAGE_VANITY_URL","INVITE_SPLASH","MEMBER_PROFILES","MEMBER_VERIFICATION_GATE_ENABLED","NEWS","PREVIEW_ENABLED","PRIVATE_THREADS","ROLE_ICONS","SEVEN_DAY_THREAD_ARCHIVE","SOUNDBOARD","THREE_DAY_THREAD_ARCHIVE","VANITY_URL"],"icon":"a_a0d87e2a2df77cab12db85aa1fe59408","iconURL":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=1024","iconURLs":{"16":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=16","32":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=32","64":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=64","128":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=128","256":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=256","512":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=512","1024":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=1024","2048":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=2048","4096":"https://cdn.discordapp.com/icons/949096817050648636/a_a0d87e2a2df77cab12db85aa1fe59408.gif?size=4096"},"id":"949096817050648636","isDiscoverable":true,"name":"Development Community","nsfw":false,"nsfwLevel":0,"premiumLevel":3,"premiumSubscriptionCount":15,"splash":"3aa408cf6fa02c79002c45453ce77614","splashURL":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=1024","splashURLs":{"16":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=16","32":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=32","64":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=64","128":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=128","256":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=256","512":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=512","1024":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=1024","2048":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=2048","4096":"https://cdn.discordapp.com/splashes/949096817050648636/3aa408cf6fa02c79002c45453ce77614.webp?size=4096"},"vanityURL":"https://discord.gg/dae","vanityURLCode":"dae","verificationLevel":2},"guild_id":"949096817050648636","inviteURL":"https://discord.gg/dae","type":0}
 */
export interface Invite {
    approximateMemberCount: number;
    approximatePresenceCount: number;
    channel: {
        createdAt: string;
        createdAtTimestamp: number;
        id: string;
        name: string;
        type: number;
    };
    code: string;
    expiresAt: string;
    expiresAtTimestamp: number;
    expiresIn: number;
    guild: Guild;
    guild_id: string;
    inviteURL: string;
    type: number;
}
export interface Channel {
    id: string;
    name: string;
    type: number;
    guild_id: string;
    position: number;
    permission_overwrites: string[];
    rate_limit_per_user: number;
    nsfw: boolean;
    parent_id: string;
    last_message_id: string;
    topic: string;
    messages: string[];
    threads: string[];
    members: string[];
    last_message: string;
    last_pin: string;
    last_message_timestamp: string;
    last_pin_timestamp: string;

}

/**
 * Tweet data, this is the data of a tweet
 * ex:
 * {"bookmarkCount":0,"createdAt":"Wed Apr 05 23:09:11 +0000 2023","createdAtTimestamp":1680736151000,"entities":{"hashtags":[],"mentionedUsers":[],"urls":["http://discord.gg/zAHeEmPXNy"]},"fullText":"hOLA hice un servidor de discord amigos jijiji, unanse porfi.https://t.co/4IAQ6BuVke https://t.co/zuTNuo7XXM.","id":"1643752674238537735","lang":"es","likeCount":2,"media":[{"type":"photo","url":"https://pbs.twimg.com/media/Fs_ITI6XwAELVnd.png"}],"quoteCount":0,"replyCount":0,"retweetCount":3,"tweetBy":{"createdAt":"Wed Jan 20 05:50:47 +0000 2021","description":"game & software developer |❤️@wazaguy164005","favouritesCount":2170,"followersCount":148,"followingsCount":69,"fullName":"niz","id":"1351769067829547008","isVerified":false,"location":"","pinnedTweet":"1714340877764600086","profileBanner":"https://pbs.twimg.com/profile_banners/1351769067829547008/1706372295","profileImage":"https://pbs.twimg.com/profile_images/1759639511850496000/Ruj5Q18H_normal.jpg","statusesCount":3924,"userName":"gallenizdev"},"viewCount":78}
 * 
 * in case for tweetedBy, use TwitterUser interface, and the same for Tweet in TwitterUser
 */
export interface Tweet {
    bookmarkCount: number;
    createdAt: string;
    createdAtTimestamp: number;
    entities: {
        hashtags: string[];
        mentionedUsers: string[];
        urls: string[];
    };
    fullText: string;
    id: string;
    lang: string;
    likeCount: number;
    media: {
        type: string;
        url: string;
    }[];
    quoteCount: number;
    replyCount: number;
    retweetCount: number;
    tweetBy: TwitterUser;
    viewCount: number;
}
/**
 * Twitter user data
 * ex:
 * {"createdAt":"Wed Jan 20 05:50:47 +0000 2021","description":"game & software developer |❤️@wazaguy164005","favouritesCount":2170,"followersCount":148,"followingsCount":69,"fullName":"niz","id":"1351769067829547008","isVerified":false,"location":"","pinnedTweet":"1714340877764600086","profileBanner":"https://pbs.twimg.com/profile_banners/1351769067829547008/1706372295","profileImage":"https://pbs.twimg.com/profile_images/1759639511850496000/Ruj5Q18H_normal.jpg","statusesCount":3924,"userName":"gallenizdev"}
 */
export interface TwitterUser {
    createdAt: string;
    description: string;
    favouritesCount: number;
    followersCount: number;
    followingsCount: number;
    fullName: string;
    id: string;
    isVerified: boolean;
    location: string;
    pinnedTweet: Tweet;
    pinnedTweetId: string;
    profileBanner: string;
    profileImage: string;
    statusesCount: number;
    userName: string;
}
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
 * Image, yay, this is the image, but, why this is here? I don't know, but, it's here
 */
export interface Image {
    url : string | undefined;
    name : string | undefined;
    image: string;
    proxy_url?: string;
}
export interface Error {
    code: number;
    message: string;
}
/**
 * Why this is called EventEmitterResponse? I don't know, but it's the response of the EventEmitter.
 */
export interface EventEmitterResponse<DataType> { 
    url: string;
    data?: DataType  ;
    image ?:  Image,
    usedCache: boolean;
    code : number;
    message?:string;

}
/**
 * Uy UY UY, this is the config of the client
 */
export interface Configs {
    misc?: MiscConfig;
    cache?: CacheConfig;
    api_keys?: ApiKeys;
}
/**
 * Im funi, right? :D
 * 
 * Okay, this isnt necessary, but, i like it uwu
 * can you ignore this?
 * please...
 */
export const Si = "no" 