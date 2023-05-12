---
id: troubleshooting
title: Troubleshooting
sidebar_label: Troubleshooting
description: Welcome to the EasyPoll Bot Documentation! Here you can find a lot of useful information.
keywords:
    - easypoll troubleshooting
    - troubleshooting
    - help
    - bugs
slug: /troubleshooting
displayed_sidebar: docs
---

Here are some typical problems and mistakes and how you can solve them by yourself.

---

### Why are no reactions added to my newly created Poll?
If the bot does not add reactions to a newly created poll, the bot will not have permissions to do that.  
Please check the required bot permissions. In some cases, the permissions are overridden at the channel level.  
You can also use the `/setup permissions` command for this. More information can be found at [Required Bot Permissions](/permissions/required-bot-permissions.md).

![slashcommands-disabled](/images/troubleshooting/setup-permissions.png)

---

### Why I do not see the poll message?
If bot messages look like this to you, you have embeds disabled in the client settings.

![bot-message-no-embed](/images/troubleshooting/bot-message-no-embed.png)

To enable embeds, go to `Settings` => `Text & Images` and enable `Show embeds [...]`

![text-settings-show-embeds](/images/troubleshooting/text-settings-show-embeds.png)

---

### For me the commands do not work or no SlashCommand popup appears..
- Text Box Settings:  
  It is possible that in your client you have turned off that help is displayed when writing.
  - `Settings` => `Text & Images` => `Use slash commands [..]`

    ![slashcommands-disabled](/images/troubleshooting/slashcommands-disabled.png)

- Discord client does not support SlashCommands:  
  In some cases, your discord client may not support SlashCommands. This can have several reasons:
  - Please use the official Discord stable version (no Canary, PTB or Development).
  - Also, please check for new Discord client updates.
  - Alternatively you can also use the [discord browser version](https://discord.com/app) for testing.