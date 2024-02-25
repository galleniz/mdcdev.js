import Client from "./src/Client"

const client = new Client();

client.twitter.users.get("mdc_dev").then(console.log);

console.log("test");