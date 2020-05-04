---
id: the-review-process
title: The Review Process
sidebar_label: The Review Process
---

## Private Rooms
Rooms that are not marked as "Publicly Accessible" are considered private and are not reviewed by room testers, making them perfect to share with your friends or students.

![publicy-accessible-false](https://i.imgur.com/dq4l7rK.png)

TryHackMe uses "room codes" to identify the various rooms throughout the platform. You can share your "room code" with your friends or students. This code is located in the Design Tab when managing your room, found in the screenshot below.

![thm-room-code](https://i.imgur.com/5b35XgI.png)

In this case, the room code is **phantom**. Yours will be different and you can change it as you like (assuming it is not already in use and is appropriate for the platform.)

Other users can join this room by appending `/jr/` and the **room code** to `tryhackme.com`. Continuing with the example above, a user will have to visit the following URL to join the room:
`https://tryhackme.com/jr/phantom`

Once the user joins the room, they can interact with it like normal and it will appear on their "My Rooms" page on the platform.

Even with private rooms, if the room creator bans them, they are not able to join again.


## Public Rooms
These rooms are of the majority on the TryHackMe platform. Public rooms go through a review process where volunteer members will attempt to solve the room themselves, critiquing the content against the [**Room Creation Notes**](https://docs.tryhackme.com/docs/room-creation/room-creation-getting-started), amongst other criteria such as:
- Grammar
- "Task" and "Question" suitability, formatting and use of hints where appropriate.
- Whether or not the room is needed at the time it is submitted. For example, we have a lot of "Challenge" type rooms on Cryptography. We're much more inclined to accept a room that teaches a topic about Cryptography or a tool rather than another cypher "Challenge" style room.

You can submit your room to the queue by pressing **True** on "Publicly Accessible" but please do not do this until you are sure the room is in a state for public use.

![publicy-accessible-true](https://i.imgur.com/lHDGYdz.png)

**If you are submitting a "Challenge" room, please ensure you have submitted an official writeup.** Room testers will use this as a reference point.

![official-writeup](https://i.imgur.com/S0N7wis.png)

Room testing is often a time-consuming process, ensuring that content released is appropriate, engaging, reliable and all-around works. There is a finite amount of testers and often a numerous amount of rooms being tested at the same time. Because of this, patience is appreciated. We aim to get your room evaluated within a reasonable amount of time with valuable comments justifying the decision on whether or not the room has been approved.

Once the room has been approved, it will be released according to the Admins release schedule for TryHackMe. Whilst this timetable isn't definitive, it should provide a good idea:
"Walkthrough" rooms every Tuesday
"Challenge" rooms every Friday

Again, there can be multiple rooms in the queue, so even after your room being approved, there can still be a bit of a wait for it be finally published.


### My Room has been Rejected?
The room tester will have left comments in the room if it has been rejected. The room will have been rejected for the reasons listed above, however, most commonly due to small oversights such as grammar or issues with Tasks/Questions/Hints.

Review the comments left and apply the various fixes. Please resubmit when you are comfortable with it. If the issues are minor such as a few grammar mistakes or having to re-word a few tasks, your room would most likely be reviewed again pretty quickly often by the same reviewer.

However, rooms that must be re-submitted with "bigger" issues such as problems with the VM or contents will be re-visited at a time depending on the size of the submission queue.

Most of the room testers are in the TryHackMe Discord so any queries regarding your submission are best placed there!
