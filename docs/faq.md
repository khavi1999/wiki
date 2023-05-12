---
id: faq
title: FAQ
sidebar_label: FAQ
description: In our faq you will find common questions and problems with the corresponding answers and solutions.
keywords:
    - faq
    - frequently asked questions
    - questions
    - problems
    - common questions
    - help
    - corresponding answers
    - solutions
slug: /faq
displayed_sidebar: docs
---

---

### What is the bot prefix?
The bot prefix is `/` (slash).  
EasyPoll listens exclusively to Discord SlashCommands. For all commands use `/help`.

---

### Can I change the bot prefix?
Unfortunately, the bot prefix cannot be changed.  
Discord has introduced SlashCommands to have consistent commands across all bots.  
Therefore a change is not possible. In the future all bots will listen to SlashCommands, so to the prefix `/` (slash).

---

### Can I change the language?
Yes. The bot is available in multiple languages.  
To see all available languages and change the language, use the command `/setup language` on your server.

---

### Where can I find the poll id?
You can find the poll id in the footer area of each poll.

![Poll id](/images/faq/poll-id.png)

:::tip
On cell phone you can long click on the footer to copy them.
:::

---

### Where can I find the dashboard?
Currently there is no dashboard available. A dashboard is in development and will be announced on our [Discord server](https://easypoll.bot/discord) when it is released.

---

### How can I get EasyPoll Premium?
EasyPoll Premium is not implemented yet.  
As soon as Premium is available, it will be announced on our [Discord server](https://easypoll.bot/discord) and will be visible on this website.

---

### How can I use custom emojis?
To use custom emojis, just put the emoji in front of the answer: `:emoji: <answer>`  
Example: `:pizza: Pizza` / `🍕 Pizza`

:::info
You can use all official Discord emojis, all emojis from your own server and all emojis from servers where EasyPoll is used.  
If the bot cannot use an emoji, you will get a warning message.
:::

---

### Can I do time polls?
Yes, use the command [`/timepoll`](/commands/timepoll.md) for this. The command works like the normal poll command, but with the additional option `time`.  
Times are given as follows: `10m / 3h / 1d / 1d 3h 15m`  
A TimePoll can go a maximum of 7 days (30 days with EasyPoll Premium).

![Timepoll time option](/images/faq/timepoll-time-option.png)

---

### Can I close a poll?
Yes, you can close both normal Polls and TimePolls at any time. Use the  command to do this.  
You can use [`/closepoll`](/commands/closepoll.md) or you can right click the poll, go to `Apps` and click `Close this poll`.

:::tip
You can find the poll id in the footer area of each poll.  
On cell phone you can long click on the footer to copy them.
:::

---

### Can I edit a poll?
At the moment you can't edit polls. This will be possible with a future version.

---

### How can I allow/deny multiple answers?
In [`/poll`](/commands/poll.md) & [`/timepoll`](/commands/timepoll.md) there is a parameter option called `maxchoices`.  
With this option you can define the **number of maxchoices**. By default, one answer is allowed.

![Poll maxchoices option](/images/faq/poll-maxchoices-option.png)

---

### How can I give certain people bot rights without admin?
Create a role with the name `PollCreator`. Users with the role can create polls.  
You can find more information under [Permission System](/permissions/permission-system.md).

---

### How can I see which member voted for what?
To see which member voted for what, just go to the poll message, click on the three dots and select `Reactions`.  
A window will open where you can see exactly which member has voted for what.

![View reactions](/images/faq/view-reactions.png)

:::info
Please note that in anonymous polls the users are anonymous and therefore cannot be viewed.
:::

---

### How can I see who voted for what on an anonymous poll?
As the name suggests, anonymous polls are anonymous. It is not possible to see who voted for what.  
As an alternative, the poll type "Hidden" is available, which gives the possibility to see who voted for what.  
Learn more about [the different poll types](/getting-started/the-different-poll-types.md).

---

### How can I check the anonymous result before the poll is closed?
Go to the poll message => right click => `Apps` => `Poll Details` or use the [`/listpoll`](/commands/listpolls.md) command.

---

### How can I show the final result in the poll?
To display the final result in the poll message, the poll must be closed.  
To close a poll use [`/closepoll`](/commands/closepoll.md) or `right click` => `Apps` => `Close this poll`.

:::tip
To see the current result without closing the poll, use [`/listpoll`](/commands/listpolls.md)
:::

---

### Can I help to translate the bot?
Of course! If there is a language you can translate which is not translated yet, you can create a ticket on our [Discord server](https://easypoll.bot/discord) and we'll get in touch with you.

---

### Why does the bot vote for all options?
The bot must react with all possible reaction emojis when creating the poll so that members can easily click on them.  
Otherwise, members would not see the reactions and would not be able to vote or would have to search for the reaction themselves.  
This is a limitation of Discord, there is nothing we can do to change it.  
Because there is a vote from the bot on all of them, the results are not affected and can be read easily.  
Of course, the vote is not counted in closed polls!