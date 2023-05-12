---
id: breakingchanges
title: Breaking Changes (Version 5)
sidebar_label: ⚠️ Breaking Changes (v5)
description: Breaking Changes
keywords:
    - breaking changes
    - breaking
    - changes
    - updates
    - important
    - news
slug: /breaking-changes
displayed_sidebar: docs
---

:::danger
There is currently no date for the release of version 5, and as such, the changes have not yet been implemented.  
Once an exact date is known, it will be promptly announced on the [Discord server](https://easypoll.bot/discord), [website](https://easypoll.bot/), [status page](https://status.easypoll.bot), and here on this page.
:::

In the latest major update of EasyPoll, we have introduced some significant breaking changes.
These changes improve the overall functionality and user experience, but may require users to adjust their existing workflows.
Please review the release notes carefully to ensure a smooth transition to the new version.

---

# TL;DR
EasyPoll Version 5 introduces breaking changes with recreated slash commands, an updated permission system managed within server settings, and revised required bot permissions.
Poll IDs have transitioned to UUIDs, and polls created before January 11, 2023, have been assigned new UUIDs.
Make sure to review the release notes and ensure the bot has all necessary permissions for a smooth transition.

---

## SlashCommands

Several new commands have been added, and some existing ones have been renamed. A list with all commands can be found [here](https://easypoll.bot/commands).  
**All existing commands will be recreated with new default permissions**, causing the loss of previously set command permissions.
The new default permissions only allow users with admin and manage server permissions to use the commands by default.  
More information about the new permission system can be found in the following section.

## Permission System

:::caution
The new permission system is only active **after the upgrade**. Prior to that, no changes are necessary because the commands will be recreated during the upgrade, resetting any modifications.
:::

**Permissions are now exclusively managed within server settings**, under `Integrations` => `EasyPoll` => `Command Permissions`.  
Here, you can set permissions for each command, role, channel, and user. By default, the commands are only accessible to users with admin and manage server permissions.
As a result, the old permission system, which relied on the `PollCreator` role and `easypoll` channel description, has been entirely removed and no longer has any effect.  
This change allows for a simpler, more efficient, and unified management of permissions.

## Required Bot Permissions

We have **updated the required bot permissions**. Due to new features, the bot now needs additional permissions to work properly.
Please ensure that the bot has all necessary permissions on your server.

| Permissions                             | Required | For what?                                                        |
|-----------------------------------------|:--------:|------------------------------------------------------------------|
| Send Messages                           | &#9989;  | To send poll and help messages                                   |
| Send Messages in Threads                | &#9989;  | To send poll and help messages in Threads                        |
| Read Messages/View Channels             | &#9989;  | To read and receive poll messages                                |
| Read Message History                    | &#9989;  | To receive old polls and to be able to close them                |
| Manage Messages                         | &#9989;  | To manage and remove poll reactions                              |
| Embed Links                             | &#9989;  | To send and update poll message embeds                           |
| Mention @everyone, @here, and All Roles | &#9989;  | To mention roles and users in poll messages                      |
| Add Reactions                           | &#9989;  | To initialize the possible answer reactions                      |
| Use External Emojis                     | &#9989;  | To use custom emojis, even from other servers                    |
| Manage Webhooks                         | &#9989;  | To setup webhooks for a event logging channel                    |
| Attach Files                            | &#9989;  | To send poll result exports and event logging directly as a file |

:::tip
You can check the permissions directly on your server using the `/setup permissions` command.
:::

:::info
Users who have invited the bot in recent months have already been prompted with the new required permissions.
:::

## Poll IDs
We have implemented breaking changes to Poll IDs by transitioning to UUIDs. This change took effect on January 11, 2023.  
All **polls created before this date have been assigned new UUIDs** and can no longer be accessed using their old IDs.  
However, they are still available in the Poll List and Dashboard, now with their new UUIDs.

:::info
Polls created after January 11, 2023, already have UUIDs and will retain them.
:::