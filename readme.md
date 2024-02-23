# MDCDEV.js 

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

An interactor for api.mdcdev.me

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

Start your project in node.js, and run this:
```
npm i mdcdev.js
```

## Usage

### USAGE 1
```ts
import {Client} from "mdcdev.js"

const client = new Client();
// 1103388964485869609 = @me
async function getUserAvatar() {
    const avatar = await client.discord.users.avatar("@me")
    console.log("The avatar from @me is " + avatar);
    return avatar;
}
getUserAvatar();
```
### USAGE 2
```ts
import {Client as MDCClient} from "mdcdev.js"
import {Client, EmbedBuilder } from "discord.js"

const mdcClient = new MDCClient();

// example using twitter api for gay shit
const client = new Client()

client.on("messageCreate", async (msg) => {
    if (msg.content.includes("twitter.com") || msg.content.includes("x.com")) {
  
        const id = msg.split("/").pop().split("?").shift();
        const tweetData = mdcClient.twitter.tweets.get(id);
        if (tweetData?.data) {
            message.reply(`This tweet is from: ` + tweetData.data.userName);
        }
    }
})

```
### USAGE 3
```ts 
// creating an page for accounts, or smth, idk aljksdas

if (!user.image_url) {
    console.log(`The user hasn't avatar, creating one, with them acronym`)

    ws.warn(`change_perm`, `avatar`, user.me)

    user.setImage(auth, mdcClient.generateAvatar.generate(user.acronym_name))
}
```
## Contributing

You can also contribuit to this dumb project
> NOTE: this is an lib based on this api: [api.mdcdev.me](https://github.com/mdcyt/api.mdcdev.me/)

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, feel free to contact me:

- Email: niz@mdcdev.me
- GitHub: [@galleniz](https://github.com/galleniz)
- Discord: [@Galleniz](https://discord.com/users/482637805034668032)
