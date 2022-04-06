---
id: timepoll
title: TimePoll Command
sidebar_label: TimePoll
description: Read about the TimePoll command to create new polls with a time limit
keywords:
    - time
    - timepoll
    - poll
    - survey
    - create time poll
    - new time poll
    - custom time poll
    - create poll
    - new poll
    - custom poll
    - poll with time
    - time limit
slug: /commands/timepoll
---

import useBaseUrl from '@docusaurus/useBaseUrl';

---

## About the command
With the TimePoll Command you can easily create polls with time limit. After given time the poll ends and alternatively it can be closed at any time. A poll can be either a simple yes/no poll or a poll with up to 20 custom answers. A poll can run for a maximum of 7 days.

## Quick Overview
- Command: `/timepoll`
- Options: `question`, `time`, `answer[1-20]`, `maxchoices`, `text`, `allowedrole`
- Required Permissions: `Administrator`, `Manage Server`, `PollCreator`

## Arguments
| Option         | Description                                                                                                                                                  | Required | Default |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------:|:-------:|
| `question`     | What is the question?                                                                                                                                        | &#9989;  |         |
| `time`         | Time how long the poll should run. Time codes can consist of several times ending with s (second), m (minute), h (hour), d (day) or w (week). Maximum 7 days | &#9989;  |         |
| `answer[1-20]` | Answer options for which members can vote. For each answer custom emojis can be set. ([Read more here](faq.md#how-can-i-use-custom-emojis))                  | &#10060; |         |
| `maxchoices`   | How many choices are allowed per user?                                                                                                                       | &#10060; |   `1`   |
| `text`         | Text to appear above poll (introduction, ping role, ...)                                                                                                     | &#10060; |         |
| `allowedrole`  | Allowed role which can vote                                                                                                                                  | &#10060; |         |

:::info
Examples of `time` specifications:
- `15m` for 15 minutes
- `3d` for 3 days
- `1d 7h 30m` for 1 day, 7 hours and 30 minutes
:::

## Examples
**Yes/No TimePoll**  
`/timepoll question: Are you happy? time: 3h 15m`

![yes-no-timepoll](/images/commands/yes-no-timepoll.png)

**Custom TimePoll**  
`/timepoll question:What is your favorite? time: 5d 6h maxchoices:1 answer1::pizza:  Pizza answer2::hamburger:  Burger answer3::easypoll: EasyPoll answer4:Something else`

![custom-timepoll](/images/commands/custom-timepoll.png)
