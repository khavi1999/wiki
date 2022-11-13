---
id: first-steps
title: First Steps
sidebar_label: First Steps
description: Read here how you can start using EasyPoll correctly and what you should know.
keywords:
    - setup easypoll
    - setup bot
    - first steps
    - get started
    - run easypoll
    - create poll
    - first poll
    - help
slug: /getting-started/first-steps
displayed_sidebar: docs
---

---

After you have successfully [added the bot to your server](/getting-started/add-bot-to-server.md), here are some first steps for you to get started.

## 1. Check if the bot is on your server
To check if the bot is on your server, go to `Server Settings` => `Members` and search for `EasyPoll`.

![Verify that EasyPoll is a member](/images/getting-started/first-steps/members-verify-easypoll.png)

:::warning
You should not look on the right in the member list, if the bot has no permissions in this channel, he will not be shown there.
:::

## 2. Configure the bot language
To make the bot respond in your language, you should configure the language of the bot.  
For this, use the command `/setup language` and select your preferred language.

![Change bot language](/images/getting-started/first-steps/change-bot-language.png)

:::info
Currently, the bot does not support all languages. If your language is missing and you want to help translating the bot, please contact us on our [Discord server](https://easypoll.bot/discord).
:::

## 3. Check required bot permission
Before we create our first poll, we should check the required bot permissions.  
For this we use the `/setup permissions` command in the channel where we want to create polls later.  
All points should show a green tick (&#9989;). For items with a red cross (&#10060;), you have to add the missing permissions, mostly at the channel level if it is a restricted/private channel.

![Check required bot permissions](/images/getting-started/first-steps/check-required-bot-permissions.png)

## 4. Create your first poll
Now we can create our first Poll! For this we use the [`/poll`](/commands/poll.md) command and enter our question in `question`, our first answer in `answer1` and our second answer in `answer2`.  
You can find more help and all options on the [poll command page](/commands/poll.md).

![Create poll command](/images/getting-started/first-steps/create-poll-command.png)

After submitting, EasyPoll creates the poll for us:

![Our first poll](/images/getting-started/first-steps/our-first-poll.png)