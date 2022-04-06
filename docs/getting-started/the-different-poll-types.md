---
id: the-different-poll-types
title: The different poll types
sidebar_label: The different poll types
description: Learn more about the different poll types and how they work
keywords:
    - types
    - normal
    - default
    - anonymous
    - hidden
    - features
    - special features
    - visible
    - participating
    - participating members
    - confirmation
slug: /getting-started/the-different-poll-types
---

---

## Normal Polls
- Normal polls have **no special features**.
- Results and participating members are **visible to everyone.**
- The reactions on the poll remain visible and are not removed by the bot.

## Anonymous Polls
- Anonymous polls have the feature that they are **completely anonymous**.
- Results are **only visible after closing** the poll or anytime with `/listpolls`.
- **Participating members are not visible for everyone, not even for administrators.**
- The reactions on the poll are removed by the bot. As a confirmation, the member receives by default a confirmation of successful voting via direct message.
- To remove the vote, the member must vote for the option again. Also here there is a confirmation via direct message.

## Hidden Polls
:::info
Hidden polls are currently not available and will follow soon.
:::
- Hidden polls have similar features as anonymous polls.
- Results are **only visible after closing** the poll or anytime with `/listpolls`.
- However, **participating members are visible to users with permissions** (`/listpolls`).
- The reactions on the poll are removed by the bot. As a confirmation, the member receives by default a confirmation of successful voting via direct message.
- To remove the vote, the member must vote for the option again. Also here there is a confirmation via direct message.