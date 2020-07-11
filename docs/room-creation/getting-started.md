---
id: room-creation-getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Getting Started

Rooms are a virtual space where you can easily allocate tasks to users. You can create rooms for challenges (CTF's) or to run a particular workshop or training session.

Material (Virtual machines or downloads) are linked to a task, rather than a room. This means you can have several virtual machines for a single room.

The process to start allocating tasks to users is below:

1. [Create a room](https://docs.tryhackme.com/docs/rooms/creating-a-room).
2. [Upload material](https://tryhackme.com/upload) (VMs or other files) or use the ones we provide. If you are providing your own VM, [**ensure you follow the AWS conversion guidelines**](https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html) or your upload will fail.
3. [Assign tasks for a room](https://tryhackme.com/assign-tasks).
4. Give your users your room code and have them join.
5. The users in the room will now be informed to complete the given task.

## "Public" and "Private" Rooms
### "Public" Rooms
All rooms that are set to as "Public" will first go through a moderation process. No fret, The room testers work with you to get your content published! They will complete your room, comparing against these guidelines and picking out small oversights such as grammar, to name a few.

You can find out more detail on the process [**here**](https://docs.tryhackme.com/docs/room-creation/the-review-process").

We take plagiarism very seriously. Please don't submit anything that you do not have the rights to use. This includes written material, VMs, web applications and more. Room testers thoroughly check the licensing of anything found within the rooms. It's good to use images such as diagrams in walkthroughs - just please reference the original author!


### "Private" Rooms
Rooms that are not marked as "Publicly Accessible" are considered private and are not reviewed by room testers, making them perfect to share with your friends, students and colleagues alike.

![publicy-accessible-false](https://i.imgur.com/dq4l7rK.png)

TryHackMe uses "room codes" to identify the various rooms throughout the platform. You can share your "room code" with your friends or students. This code is located in the Design Tab when managing your room, found in the screenshot below.

![thm-room-code](https://i.imgur.com/5b35XgI.png)

In this case, the room code is **phantom**. Yours will be different and you can change it as you like (assuming it is not already in use and is appropriate for the platform.)

Other users can join this room by appending `/jr/` and the **room code** to `tryhackme.com`. Continuing with the example above, a user will have to visit the following URL to join the room:
`https://tryhackme.com/jr/phantom`

Once the user joins the room, they can interact with it like normal and it will appear on their "My Rooms" page on the platform.

Even with private rooms, if the room creator bans them, they are not able to join again.

## Guidance/stipulations for creating rooms
- Any brute force actions should take five minutes or less.
- Timing attacks should have a long enough delay to be noticeable
- If non-standard tools are being used, consider mentioning them in hints or room tags
- We are trying to avoid the same types of content on the site. For example, cryptography and steganography challenges. Unless you are introducing a new topic that hasn't been covered, we will most likely encourage you to share you room amongst friends only.

### Creating quality boxes
[**Darkstar7471**](https://tryhackme.com/p/DarkStar7471), an administrator and the content director for TryHackMe presented a talk at SARCON 2020 earlier this year, covering some tips and tricks in "making the mountain": creating educational and challenging vulnerable virtual machines.

His presentation details some fundamental concepts throughout the creation process such as reflecting on your target audience and giving your room a story! You can find a [**recording of the talk on SECARMY's Youtube channel**](https://youtu.be/sYLHM-86gGw?t=14873), alongside the associated presentation material on [**Google Docs**](https://docs.google.com/presentation/d/1e2_M-ErRHp8DoAHKDaTWKRT3uYwtsSMsMrHfmABm2rs/edit#slide=id.g74f9bd4390_1_8).


### Questions
- 15 questions max unless you have a very lengthy walkthrough **AND** have explicit approval from the admin team - Avoids excessively point-heavy rooms
- Try to stay from "quiz" style rooms if not previously approved by an admin. We'd much rather see new ideas and techniques being discussed! There is no reason as to why you can't design tasks to make the user apply their knowledge from what you have discussed, for example, two or three questions that can be used to summarise your task - please don't make this the focus of your room.
- You can make use of the `machine_ip` feature when writing out tasks. Think of this as a variable that will fill when users deploy an instance.

Before deploying an instance:
![Before deploying instance](https://i.imgur.com/tg89ggd.png)

After deploying an instance:
![After deploying an instance](https://i.imgur.com/cs3qLhv.png)

### Question Ideas
- Depends on the difficulty level. Use the "Difficulty Levels" to decide how much guidance you should provide.
- Validation of command output
  - If they're running nmap, what ports should they be focusing in on?
- Boot2root style rooms *can* just be user+root flags.
- Tailor your questions around the aims of your room. Are you giving a walkthrough of a new technique? Get the user to apply their knowledge from what you have discussed throughout the room so far. Avoid making this just as quiz as previously discussed.


### Room Avatar
- Avatars should have a transparent background, for dark theme purposes
- Appropriate avatars should be added to all rooms which are to be made public, the avatar should be related to the room's concepts or theme and should be site appropriate. We are an educational site.

### Difficulty Level
Clarity depends on the level of difficulty
- Easy 
  - Full guidance
- Medium 
  - Some guidance, general direction provided
  - User will likely have to do some research to determine how to use the presented tool
  - Ex: Final step in Vulnversity
- Hard
  - No guidance
  - Trial and error required as some tools may fail
  - Often the first option presented might not work

If you are unsure, pick the difficulty that you feel suits your room best. Room testers will suggest the difficulty the feel is more appropriate.

### Tags
For public rooms we require a minimum of 4 tags. Some ideas for what we expect are listed below:
- Room series, if applicable
  - Ex: Red Primer
- General theme
  - Ex: Spiderman
- Major topic covered
  - PrivEsc, Linux, web
  - CVE Numbers
  - Vulnerabilities SQLi, RCE, etc.
- Tools used
  - Burp Suite, Metasploit, SQLMap etc.
- Vulnerable Protocols
  - SMB, POP3, etc.

Rooms which do not include tags will not be made public although challenges have some leniency due to spoilers. For example, we are not expecting you list CVE numbers that will spoil the challenge.

### Room Descriptions
Short abstract of room, detail depending on difficulty level and style of room (challenge/walkthrough)

### General Documentation
Limitation in including connection documentation unless it is part of a very large room/event room. For example, directing people to the [**openvpn room**](https://tryhackme.com/room/openvpn) to get connected is okay. If you are doing a walkthrough room and are expecting people to authenticate with a service such as a web app or SSH on the VM, please clearly display the credentials to do.

### Miscellaneous Notes
- The limits on VM OS types are because of AWS, they are not imposed by TryHackMe. Notably, this means you cannot use any Debian after Debian 8.
- Windows installs MUST be booting off an MBR partition, GPT will not work and will fail to convert.
- DO NOT activate Windows. TryHackMe uses AWS licensing for these.
For more information on the AWS requirements, see [**The AWS Conversion requirements.**](https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html)
If you do not follow these requirements, VM conversion will fail.

#### Thanks for being interested in making content!