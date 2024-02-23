import Client from "./src/Client"

console.log("when you see this, you know you are in the right place!")

const client = new Client();

client.discord.users.avatar("482637805034668032").then((res) => {
    console.log(res);
});