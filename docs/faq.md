---
id: faq
title: FAQ
sidebar_label: FAQ
description: Frequently Asked Questions
slug: /faq
---

---

### What is the bot prefix?
The prefix is `/`.  
EasyPoll listens exclusively to Discord SlashCommands. For all commands use `/help`.

### How can I allow/deny multiple answers?
In [`/poll`](/commands/poll.md) & [`/timepoll`](/commands/timepoll.md) there is the parameter option `allowmultiplechoices`. Set this to **True** or **False**.

### Can I use custom emojis?
Yes, you can use all official Discord emojis, all emojis from your own server and all emojis from servers where EasyPoll is used.  
If the bot cannot use an emoji, you will get a warning message.

### How can I use custom emojis?
To use custom emojis, just put the emoji in front of the answer: `:emoji: <answer>`  
Example: `:pizza: Pizza` / `🍕 Pizza`

:::caution

It is important that there is a space between the emoji and the answer.  
Otherwise, the bot will not identify the custom emoji and a default emoji will be used.

:::

### Can I do time polls?
Yes, use the command [`/timepoll`](/commands/timepoll.md) for this. The command works like the normal Poll Command, but with the additional option `time`.  
Times are given as follows: `10m / 3h / 1d / 1d 3h 15m`  
A TimePoll can go a maximum of 7 days.

### Can I close a poll?
Yes, you can close both normal Polls and TimePolls at any time. Use the [`/closepoll`](/commands/closepoll.md) command to do this.  
You can find the poll ID in the footer area of each poll.

:::tip

On cell phone you can long click on the footer to copy them.

:::

### How can I give certain people bot rights without admin?
Create a role with the name `PollCreator`. Users with the role can create polls.  
You can find more information under [Permission System](/permissions/permission-system.md).

### Can I change the language?
Yes. The bot is available in multiple languages.  
To see all available languages and change the language, use the command `/setup language` on your server.

### How can I see which member voted for what?
To see which member voted for what, just go to the poll message, click on the three dots and select `Reactions`.  
A window will open where you can see exactly which member has voted for what.

### Why does the bot vote for all options?
The bot must react with all possible reaction emojis when creating the poll so that members can easily click on them.  
Otherwise, members would not see the reactions and would not be able to vote or would have to search for the reaction themselves.  
This is a limitation of Discord, there is nothing we can do to change it.  
Because there is a vote from the bot on all of them, the results are not affected and can be read easily.  
Of course, the vote is not counted in closed polls!