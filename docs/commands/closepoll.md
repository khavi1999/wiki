---
id: closepoll
title: ClosePoll Command
sidebar_label: ClosePoll
description: Read about the command ClosePoll to be able to close polls
keywords:
    - close poll
    - end poll
    - poll end
    - final result
    - poll result
slug: /commands/closepoll
---

import useBaseUrl from '@docusaurus/useBaseUrl';

---

## About the command
The ClosePoll Command can be used to close any poll directly. This will display the final result of the poll and members will no longer be able to vote on this poll.

## Quick Overview
- Command: `/closepoll`
- Options: `pollid`
- Required Permissions: `Administrator`, `Manage Server`, `PollCreator`, `Creator of the poll`

## Arguments
| Option   | Description                                                                     | Required |
| -------- | ------------------------------------------------------------------------------- | :------: |
| `pollid` | ID of the poll that is to be closed. _(Can be found in the footer of the poll)_ | &#9989;  |

## Examples
`/closepoll pollid:QpzmWxz4rk`

![closepoll](/images/commands/closepoll.png)
