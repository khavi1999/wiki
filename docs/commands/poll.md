---
id: poll
title: Poll Command
sidebar_label: Poll
description: Read about the Poll command to create new polls
keywords:
    - poll
    - survey
    - create poll
    - new poll
    - custom poll
slug: /commands/poll
---

import useBaseUrl from '@docusaurus/useBaseUrl';

---

## About the command
With the Poll Command you can easily create polls. Normal polls have no time limit, but can be closed at any time. A poll can be either a simple yes/no poll or a poll with up to 20 custom answers.

## Quick Overview
- Command: `/poll`
- Options: `question`, `answer[1-20]`, `maxchoices`, `text`, `allowedrole`
- Required Permissions: `Administrator`, `Manage Server`, `PollCreator`

## Arguments
| Option         | Description                                                                                                                                 | Required | Default |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------|:--------:|:-------:|
| `question`     | What is the question?                                                                                                                       | &#9989;  |         |
| `answer[1-20]` | Answer options for which members can vote. For each answer custom emojis can be set. ([Read more here](faq.md#how-can-i-use-custom-emojis)) | &#10060; |         |
| `maxchoices`   | How many choices are allowed per user?                                                                                                      | &#10060; |   `1`   |
| `text`         | Text to appear above poll (introduction, ping role, ...)                                                                                    | &#10060; |         |
| `allowedrole`  | Allowed role which can vote                                                                                                                 | &#10060; |         |

## Examples
**Yes/No Poll**  
`/poll question:Are you happy?`

![yes-no-poll](/images/commands/poll-yesno.png)

**Custom Poll**  
`/poll question:What is your favorite? maxchoices:1 answer1::pizza: Pizza answer2::hamburger: Burger answer3::easypoll: EasyPoll answer4:Something else`

![custom-poll](/images/commands/poll-custom.png)
