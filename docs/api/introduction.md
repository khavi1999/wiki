---
id: introduction
title: Introduction
sidebar_label: Introduction
description: Welcome to the EasyPoll Bot API Documentation! Here you can find a lot of useful information about our public api.
keywords:
- api
slug: /api
displayed_sidebar: api
---

---

# Welcome to the EasyPoll API Docs

## Base URL

```
https://easypoll.bot/api
````

## API Versions
| Version | Status    | Base URL                    |
|---------|-----------|-----------------------------|
| 1       | Available | https://easypoll.bot/api/v1 |


---

## Authentication

For some of our API endpoints you have to authenticate yourself. Each user has its own token for authentication. You can find this token on your profile page.

### Authorization Header

```
Authorization: Bearer XXXXXXXXXXXXXXX
```

---

## Rate Limit

Our API is protected with a rate limit to prevent it from spam requests. The limit ensures that our api is not overloaded or abused. Attempts to bypass this limit will be banned from our platform.

### Global Ratelimit
Global rate limits are applied on all routes

| Route | Rquest Type | Max Requests | Throttle        | 
|-------|-------------|--------------|-----------------|
| `*`   | `*`         | ?/minute     | ? minutes block |

### Hitting the Rate Limit
If you have reached the RateLimit you will receive an HTTP 429 Error and are temporarily blocked for new requests.

```json title="HTTP HEADER"
retry-after: 3600
retry-at: 2021-04-25T22:30:56+00:00
```

| Field         | Type             | Description                                            |
| ------------- | ---------------- | ------------------------------------------------------ |
| `retry-after` | `integer`        | The time in seconds until you can send another request |
| `retry-at`    | `date (ISO8601)` | The date when you can send another request             |

---

## Response Caching

Some API responses are cached by our system and reset after a specified time.
This is to protect our API from overloading and reduce response time.
When a response was cached can be seen in the response at `cache_date`.

| Route           | Request Type  | Cache Time |
|-----------------| ------------- |------------|
| `poll/:poll_id` | `GET`         | X minutes  |


---

## Response Codes
Our API returns a status code for each request.
For this the default [HTTP codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used.

| Code  | Type      | Message                                                                                    |
| ----- | --------- |--------------------------------------------------------------------------------------------|
| 200   | success   | The request completed successfully                                                         |
| 400   | error     | The request was incorrectly formatted                                                      |
| 401   | error     | The [Authorization](#authentication) header was missing or invalid                         |
| 403   | error     | The passed [Authorization](#authentication) token did not have permission for the resource |
| 404   | error     | The requested path or function was not found                                               |
| 405   | error     | The requested method is not allowed                                                        |
| 429   | error     | The request has reached the [Rate Limit](#rate-limit) and has been blocked                 |
| 5xx   | error     | The server has an error processing your request                                            |
