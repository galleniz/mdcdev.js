import Client from "./src/Client"

const client = new Client();

client.discord.users.avatar("482637805034668032").then((res) => {
    console.log(res);
});

console.log("test");