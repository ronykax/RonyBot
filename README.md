# RonyBot
Private moderation & utility bot for Rony's Discord server.

### Installation
This bot runs on [Node.js](https://nodejs.org/en) and can be self-hosted. Follow these steps to install and start the bot:
1. Clone the repository
```
git clone https://github.com/ronyfied/RonyBot.git
```

2. Navigate to the Project Directory
```
cd RonyBot
```

3. Install dependencies
```
npm install
```

4. Transpile to JavaScript
```
npm run build
```

5. Configure your bot

Rename the `.env.example` file to `.env` and paste your bot's token along with the client and guild ID.

To update custom status, head to [`src/classes/Client.ts`](https://github.com/ronyfied/RonyBot/blob/1f044f2a81f0dcc4aa90f6620ef527972c1fa650/src/classes/Client.ts#L24).

6. Run the bot
```
npm run start
```