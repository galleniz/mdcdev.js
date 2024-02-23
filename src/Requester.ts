import axios, { AxiosInstance } from 'axios';
import Client from './Client';

/**
 * Represents a requester that makes HTTP requests.
 */
export default class Requester {
    /**
     * The client used to make requests.
     */
    public client: Client;

    constructor(client: Client) {
        this.client =client;
    }

    /**
     * Makes an HTTP request to the specified endpoint.
     * @param endpoint - The endpoint to make the request to.
     * @param data - The data to send with the request (optional).
     * @returns A Promise that resolves to the response data.
     * @throws If the request fails.
     */
    async makeRequest(endpoint: string, data?: any) {
        try {
            const response = await this.client.request(
                endpoint,
                data,
            );

            return response?.data;
        } catch (error ) {
            throw new Error(`Request failed: ${error}`);
        }
    }
}
