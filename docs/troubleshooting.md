---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
description: Welcome to the EasyPoll Bot Documentation! Here you can find a lot of useful information.
keywords:
- easypoll troubleshooting
- troubleshooting
- help
slug: /troubleshooting
---

---

Here are some typical problems and mistakes and how you can solve them by yourself.

### No reaction will be added to my poll..
If the bot does not add reactions to a newly created poll, the bot will not have permissions to do that.  
Please check the required bot permissions. In some cases, the permissions are overridden at the channel level.  
You can also use the `/setup permissions` command for this. More information can be found at [Required Bot Permissions](/permissions/required-bot-permissions)

### Polls do not work in threads and "EasyPoll is thinking"..
We are already aware of this error. Currently there is no support from EasyPoll for the new Discord Threads.  
We are currently waiting for an update of our library (JDA) to ensure functionality.  
Feel free to check out [Issue #5](https://github.com/fbrettnich/easypoll-bot/issues/5) on GitHub for more information.

### For me the commands do not work or no SlashCommand popup appears..
- Text Box Settings:  
  It is possible that in your client you have turned off that help is displayed when writing.
  - `Settings` => `Text & Images` => `Text Box` => `Use slash commands [..]`

    ![slashcommands-disabled](/images/troubleshooting/slashcommands-disabled.png)

- Discord client does not support SlashCommands:  
  In some cases, your discord client may not support SlashCommands. This can have several reasons:
  - Please use the official Discord stable version (no Canary, PTB or Development).
  - Also, please check for new Discord client updates.
  - Alternatively you can also use the [discord browser version](https://discord.com/app) for testing.