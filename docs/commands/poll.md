---
id: poll
title: Poll Command
sidebar_label: Poll
description: Read about the Poll command to create new polls
keywords:
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
- Options: `question`, `allowmultiplechoices`, `answer[1-20]`
- Required Permissions: `Administrator`, `Manage Server`, `PollCreator`

## Arguments
| Option                 | Description                                                                                                                                                                              | Required |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| `question`             | The Poll Question.                                                                                                                                                                       | &#9989;  |
| `allowmultiplechoices` | Are members allowed to vote for multiple answers?                                                                                                                                        | &#10060; |
| `answer[1-20]`         | Answer options for which members can vote. For each answer custom emojis can be set ([Read more here](https://github.com/fbrettnich/easypoll-bot/wiki/FAQ#how-can-i-use-custom-emojis)). | &#10060; |

## Examples
**Yes/No Poll**  
`/poll question:Are you happy?`

![yes-no-poll](/images/commands/yes-no-poll.png)

**Custom Poll**  
`/poll question:What is your favorite? allowmultiplechoices:False answer1::pizza:  Pizza answer2::hamburger:  Burger answer3::easypoll: EasyPoll answer4:Something else`

![custom-poll](/images/commands/custom-poll.png)
