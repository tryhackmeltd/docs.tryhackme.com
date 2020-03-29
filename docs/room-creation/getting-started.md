---
id: room-creation-getting-started
title: Getting Started
sidebar_label: Getting Started
---

## TODO - Getting Started

Rooms are a virtual space where you can easily allocate tasks to users. You can create rooms for challenges (CTF's) or to run a particular workshop or training session.

Material (Virtual machines or downloads) are linked to a task, rather than a room. This mean you can have several virtual machines for a single room.

The process to start allocating tasks to users is below:

1. [Create a room](https://docs.tryhackme.com/docs/rooms/creating-a-room).
2. [Upload material](https://tryhackme.com/upload) (VMs or other files) or use the ones we provide.
3. [Assign tasks for a room](https://tryhackme.com/assign-tasks).
4. Give your users your room code and have them join.
5. The users in the room will now be informed to complete the given task.

## Guidance/stipulations for creating rooms
- Any brute force actions should take five minutes or less
  - Timing-attacks should have a long enough delay to be noticeable
-If non-standard tools are being used, consider mentioning them in hints

### Questions
- 15 questions max unless you have a very lengthy walkthrough AND have explicit approval from the admin team - Avoids excessively point-heavy rooms
### Room Avatar
- Avatars should have a transparent background
- Implemented for dark theme purposes
- Appropriate avatars should be added to all rooms which are to be made public, the avatar should be related to the room's concepts or theme and should be site appropriate
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
### Tags
- Room series, if applicable
  - Ex: Red Primer
- General theme
  - Ex: Spiderman
Major topic covered
- PrivEsc, Linux, web
- CVE Numbers
- Vulnerabilities
  - SQLi, RCE, etc.
- Tools used
  - Burp Suite, Metasploit, SQLMap etc.
- Vulnerable Protocols
  - SMB, POP3, etc.
Rooms which do not include tags will not be made public although challenges have some leniency due to spoilers
### Question considerations
- Depends on the difficulty level
- Validation of command output
  - If they're running nmap, what ports should they be focusing in on?
- Boot2root *can* just be user+root
### Room Descriptions
Short abstract of room, detail depending on difficulty level and style of room (challenge/walkthrough)
### General documentation
Limitation in including connection documentation unless it is part of a very large room/event room
### Miscellaneous Notes
- The limits on VM OS types are because of AWS CLI, not imposed by TryHackMe. Notably, this means you cannot use any Debian after Debian 8.
- Windows installs MUST be booting off an MBR partition, GPT will not work and will fail to convert
- DO NOT activate Windows. TryHackMe uses AWS licensing for these

