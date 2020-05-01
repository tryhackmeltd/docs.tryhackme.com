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

## Retrieve Public Rooms
This endpoint is used to retrieve details of public rooms on the platform.
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

## Status Codes & Error Handling
A successful request to any of these endpoints will always return a 200 OK response.

A request to an endpoint that does not return a 200 OK response will contain a message parameter attached to the response as follows
```
{
	message: "API Key is invalid or has expired."
}
```