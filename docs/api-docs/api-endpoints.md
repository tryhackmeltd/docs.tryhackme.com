---
id: api-endpoints
title: API Endpoints
sidebar_label: API Endpoints
---
## Authentication/Registering Users
When you want a  user wants to launch into a TryHackMe room, you will send a POST request to the URL below. The apiKey parameter is the API key required to authenticate the request. The userId parameter is a unique string used to represent your user and the roomCode is the code of the room that the user is trying to access. A successful request will return a 200 status code with a URL:
* If the user has not authenticated to TryHackMe through this API endpoint, the URL will point to a unique sign up page that redirects a user to a room after successful registration
* If that user has authenticated to TryHackMe through this API endpoint, the URL will automatically enter a user into a room
```
POST https://tryhackme.com/external/api/authenticate
```

The request body parameters are
```
{
	apiKey: String,
	userId: String,
    roomCode: String
}
```

The headers & data encoding are
```
Content-Type: application/x-www-form-urlencoded
```

The expected successful response is
```
{
     url: String
}
```

## Retrieve User Progress
This endpoint returns users progress in the specified room. The {ROOM-CODE} parameter is the room code you would like to receive data from.
```
GET https://tryhackme.com/external/api/getgraphdata/{ROOM-CODE}
```

The API key needs to be provided inside the THM-API-KEY header as follows
```
THM-API-KEY: {API-KEY}
```

The expected successful response is
```
[
  {
    "name": "String",
    "data": [
      "",
      0
    ],
    "taskData": [
      {
        "taskNo": Integer,
        "questionNo": Integer,
        "correct": Boolean,
        "score": Integer,
        "timeCorrect": "ISO8601 UTC Timestamp"
      },
    ],
    "totalScore": Integer,
    "rankNo": Integer,
    "avatar": String,
    "level": Integer
  }
]
```

**Data will only show for users that are in the room, and that have been created through the `/api/external/authenticate` endpoint. If you've generated a user through this endpoint, they'll also need to sign up and join the room.**

## Retrieving Users
This endpoint is used to retrieve all the users that have signed up using the API.
```
GET https://tryhackme.com/external/api/users
```

The API key needs to be provided inside the THM-API-KEY header as follows
```
THM-API-KEY: {API-KEY}
```

The expected successful response is as follows
```
{
    "status": true,
    "users": [
        {
            "username": String,
            "email": String,
            "dateSignedUp": ISO8601 UTC Datetime
        }
    ]
}
```

## Remove Users From Room
This endpoint is used to remove a user from a room.
```
POST https://tryhackme.com/external/api/leaveRoom
```

The request body parameters are
```
{
	apiKey: String,
	userId: String,
    roomCode: String
}
```

The headers & data encoding are
```
Content-Type: application/x-www-form-urlencoded
```

The expected successful response is as follows
```
{}
```

## Retrieve Rooms
This endpoint is used to retrieve details of public and the user's private rooms on the platform. The users field is only returned for a room that owned/managed by the API user.
```
GET https://tryhackme.com/external/api/rooms
```

The API key needs to be provided inside the THM-API-KEY header as follows
```
THM-API-KEY: {API-KEY}
```

The expected successful response is as follows
```
[
    {
        "code": String,
        "title": String,
        "description": String
        'public': Boolean
        'users': [String]
    },
]
```

## Check If Room Exists
This endpoint is used to check if a room exists on the platform using the {ROOM-CODE} as a URL parameter..
```
GET https://tryhackme.com/external/api/roomExists/{ROOM-CODE}
```

The API key needs to be provided inside the THM-API-KEY header as follows
```
THM-API-KEY: {API-KEY}
```

The expected successful response is as follows
```
{
    "roomExists": Boolean
}
```

## Room Questions
This endpoint is used to retrieve questions associated with a {ROOM-CODE}. This endpoint retrieves questions associated with public rooms and private rooms owned by the API user.
```
GET https://tryhackme.com/external/api/questions/{ROOM-CODE}
```

The API key needs to be provided inside the THM-API-KEY header as follows
```
THM-API-KEY: {API-KEY}
```

The expected successful response is as follows
```
{
    "questions": [
        {
            "taskNo": Integer,
            "infoList": [
                {
                    "questionNo": Integer,
                    "question": String,
                    "answer": String,
                    "hint": String,
                    "extraPoints": Integer
                }
            ]
        }
}
```

## Status Codes & Error Handling
A successful request to any of these endpoints will always return a 200 OK response.

A request to an endpoint that does not return a 200 OK response will contain a message parameter attached to the response as follows
```
{
	message: "API Key is invalid or has expired."
}
```