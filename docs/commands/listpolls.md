---
id: listpolls
title: ListPolls Command
sidebar_label: ListPolls
description: Read about the ListPolls command to list all polls
keywords:
    - poll
    - list
    - survey
    - list poll
    - poll list
    - polls
slug: /commands/listpolls
---

import useBaseUrl from '@docusaurus/useBaseUrl';

---

## About the command
Shows all polls on the current server. Information about the status, participants, settings, result and more.

## Quick Overview
- Command: `/listpolls`
- Options: `pollid`, `channel`, `user`, `status`
- Required Permissions: `Administrator`, `Manage Server`, `PollCreator`

## Arguments
| Option    | Description                | Required |   Default   |
|-----------|----------------------------|:--------:|:-----------:|
| `pollid`  | Id of the Poll             | &#10060; | `No Filter` |
| `channel` | Channel of the polls       | &#10060; | `No Filter` |
| `user`    | User who created the polls | &#10060; | `No Filter` |
| `status`  | Status of the poll         | &#10060; |    `All`    |

## Examples
**List All Polls**  
`/listpolls`