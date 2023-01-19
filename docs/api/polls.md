---
id: polls
title: Polls
sidebar_label: Polls
description: Welcome to the EasyPoll Bot API Documentation! Here you can find a lot of useful information about our public api.
keywords:
- api
slug: /api/polls
displayed_sidebar: api
---

---

## Get Guild Polls

```bash
GET /guilds/:guild_id/polls
```

### Response Fields
| Field | Type                                                                          | Description |
|-------| ----------------------------------------------------------------------------- |-------------|
| x     | [`snowflake`](https://discord.com/developers/docs/reference#snowflakes)       | X           |
| x     | `date (ISO8601)`                                                              | X           |

### Example Response

```json title="/guilds/552156123734474762/polls"
{
  
}
```

---


## Get User Polls

```bash
GET /users/:user_id/polls
```

### Response Fields
| Field | Type                                                                          | Description |
|-------| ----------------------------------------------------------------------------- |-------------|
| x     | [`snowflake`](https://discord.com/developers/docs/reference#snowflakes)       | x           |

### Example Response

```json title="/users/231091710195662848/polls"
{

}
```
