import Client from "../../Client";
import { LoggerXD } from "../../utils/Logger";
import DiscordApplications from "./applications";
import DiscordExperiments from "./experiments";
import DiscordGuilds from "./guilds";
import DiscordInvites from "./invites";
import DiscordUsers from "./users";


/**
 * Represents the Discord API v2 index module.
 */
export default class IndexDiscord {
    /**
     * The Discord client instance.
     */
    public client : Client;
    /**
     * The Discord applications module.
     */
    public applications: DiscordApplications;
    /**
     * The Discord experiments module.
     */
    public experiments: DiscordExperiments;
    /**
     * The Discord guilds module.
     */
    public guilds : DiscordGuilds;
    /**
     * The Discord invites module.
     */
    public invites : DiscordInvites;
    /**
     * The Discord users module.
     */
    public users : DiscordUsers;

    /**
     * Creates a new instance of the IndexDiscord class.
     * @param client The Discord client instance.
     */
    constructor(client : Client) {
        this.client = client;
        this.applications = new DiscordApplications(client);
        this.experiments = new DiscordExperiments(client);
        this.guilds = new DiscordGuilds(client);
        this.invites = new DiscordInvites(client);
        this.users = new DiscordUsers(client);

        LoggerXD.info("Discord API v2 loaded");
    }
}