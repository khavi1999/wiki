---
id: permission-system
title: Permission System
sidebar_label: Permission System
description: Explanation of the EasyPoll Bot Permission System to authorize members
keywords:
    - permissions
    - roles
    - pollcreator
slug: /permissions/permission-system
---

---

EasyPoll uses a very simple permission system with Discord permissions, roles and channel names.

## Poll Permission Overview
|                                  | Permission: `ADMINISTRATOR` | Permission: `MANAGE_PERMISSIONS` | Role: `PollCreator` | Channel-Topic: `easypoll` | Role: `@everyone` |
| -------------------------------- | :-------------------------: | :------------------------------: | :-----------------: | :-----------------------: | :---------------: |
| Create polls everywhere          | &#9989;                     | &#9989;                          | &#9989;             | &#10060;                  | &#10060;          |
| Close polls everywhere           | &#9989;                     | &#9989;                          | &#9989;             | &#10060;                  | &#10060;          |
| Create polls in special channel  | &#9989;                     | &#9989;                          | &#9989;             | &#9989;                   | &#10060;          |
| Close own polls everywhere       | &#9989;                     | &#9989;                          | &#9989;             | &#9989;                   | &#9989;           |
| Use all other bot info commands  | &#9989;                     | &#9989;                          | &#9989;             | &#9989;                   | &#9989;           |

## Members with the server permissions
All members with the `ADMINISTRATOR` or `MANAGE SERVER` server permission have full access to the bot everywhere.

## Members with a server role named **PollCreator**
All members with the server role named `PollCreator` also have everywhere and full access to the bot.  
The role `PollCreator` must be **created manually** for this purpose.  
The role does not require any special permissions, only the name of the role is important.

## Text channels with **easypoll** in the name or description/topic
All members in text channels that contains `easypoll` in name or description (topic).  
Just create or edit a text channel and put the word `easypoll` in the channel name or in the channel description.  
All members have permissions to create a poll there. They can only close their own polls.