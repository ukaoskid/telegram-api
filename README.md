# telegram-bot-api-client

Telegram Bot API Client interface.

## Installation and use

To install the package just type `npm i telegram-bot-api-client`

### Example

#### First you need to create a Telegram Bot
Open Telegram and search for **@BotFather**. It is the manager of all Telegram's bot.
The bot creation happens entirely on the chat by using commands.

- Request a new bot: `/newbot`
    - **@BotFather** will ask you for a name to give: `give-a-name-to-the-bot`
- Finally request for a token: `/token`
    - **@BotFather** will reply you with a token. Copy it.
- Just if you want, you can sent the bot as an entity that can join Telegram groups: `/setjoingroups`
    - **@BotFather** will ask you to `enable` or `disable` the bot to join groups: `enable | disable`

Now you have activated your bot. Let's try to send a message:

```typescript
let botToken = "the token you got from @BotFather";
let telegram: Telegram = new Telegram(botToken);
let userChatId: 12345678

/*
 * Generally, you need to know the Telegram ID of the user you want to involve in the action.
 */
let messagePayload: ISendMessagePayload = {
  chat_id: userChatId,
  text: "testing a text message"
}

telegram.messages.sendMessage(messagePayload).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(JSON.stringify(error));
});
```