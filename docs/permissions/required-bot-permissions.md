---
id: required-bot-permissions
title: Required Bot Permissions
sidebar_label: Required Bot Permissions
description: Check if the bot has all required permissions on a server
keywords:
    - permissions
    - required
    - check
    - auto check
    - run check
    - setup
    - setup permissions
    - required permissions
    - rights
    - roles
    - access
    - authorize
    - administration
    - channel
    - channel permissions
slug: /permissions/required-bot-permissions
displayed_sidebar: docs
---

---

The EasyPoll bot needs a few permissions to work completely and without problems.  
In the normal case, all required permissions are automatically assigned to the EasyPoll role when the bot is invited.  
In some cases, the inviter removes some required permissions, which causes the bot to stop working properly.

## Required permissions
| Permissions                             | Required | For what?                                         |
|-----------------------------------------| :------: |---------------------------------------------------|
| Read Messages                           | &#9989;  | To read command and poll messages                 |
| Send Messages                           | &#9989;  | To send polls and help messages                   |
| Send Messages in Threads                | &#9989;  | To send polls and help messages in Threads        |
| Manage Messages                         | &#9989;  | To manage poll reactions                          |
| Embed Links                             | &#9989;  | To send and update poll message embeds            |
| Read Message History                    | &#9989;  | To receive old polls and to be able to close them |
| Mention @everyone, @here, and All Roles | &#9989;  | To mention roles in poll messages                 |
| Add Reactions                           | &#9989;  | To initialize the possible answer reactions       |
| Use External Emojis                     | &#9989;  | To use custom emojis, even from other servers     |

## How do I check if the bot has all permissions?
We have added a command that allows you to check all the required permissions of the bot at both server and channel level.  
The command for this is `/setup permissions`.

![setup-permissions](/images/commands/setup-permissions.png)

## How do I set permissions at the channel level?
It is important that the required bot permissions are not overridden at the channel level.  
If the bot does not have channel level permissions _(because you are overriding it with the @everyone role, for example)_, you can set the permissions at channel level as follows:  

1. Go to the Channel Settings  
![edit-channel](/images/permissions/edit-channel.png)


2. Go to Permissions  
![channel-permissions](/images/permissions/channel-permissions.png)


3. Add EasyPoll  
![permissions-add-role](/images/permissions/permissions-add-role.png)


4. Select all required permissions and click save changes  
![set-channel-permissions](/images/permissions/set-channel-permissions.png)


## What happens if the bot does not have all required permissions?
EasyPoll will try to work as good as possible. However, there will be errors, for example:
- Polls will not update with the result when closed and will not show as closed, or
- EasyPoll will not add the necessary reactions to the poll, or
- EasyPoll cannot check for multiple answers and remove the reaction from the user if needed, or
- EasyPoll will not display any poll message at all