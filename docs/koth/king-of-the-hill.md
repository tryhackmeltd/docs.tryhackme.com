---
id: king-of-the-hill
title: King of the Hill
sidebar_label: King of the Hill
---

## What is "King of the Hill"?
King of the Hill (KoTH) is a competitive hacking game, where you play against up to 5 other hackers to compromise a machine and then patch its vulnerabilities to stop other players from also gaining access. The longer you maintain your access, the more points you get.

Traditionally you are taught **how** to compromise a machine to claim ownership of it. TryHackMe provides plenty of content on how to do so. However, an often overlooked aspect of hacking is maintaining access.

KoTH inspires you to not only apply the knowledge gained from the content within the platform in a competitive, timed setting; Koth also encourages the use of blue-team tactics to prevent others from using similar methods such as those that you employed to compromise the machine.

### The Lobby System
The platform creates groups in the form of a lobby. These lobbies consist of a **maximum of 10 participating** players but can have spectators.

This means you can 1v1 or host a lobby to compete against a handful of your friends.

![lobby-system](https://i.imgur.com/q0TUfND.png)

#### Creating Your Lobby
When creating a lobby, you will be given the option to specify whether or not the lobby will be private or public, as well as how soon the lobby will start (i.e. In an hour from now to allow time for public lobbies to become full) or for example 15 minutes if you are creating a private lobby where you have already arranged with the members.

![create-lobby-private](https://i.imgur.com/3wBo1Pm.png)

When you create a private lobby, a unique invite link will be generated. You can share this link with the members that you want to participate against. This is found under the "Settings" menu (top right) within the lobby.  Private lobbies are only available to subscribers.

You can also invite "Spectators" to your lobby. They will be able to see the lobby as you see it - such as "King" changes but will have no ability to interfere with the on-going game.

#### Joining a Public Lobby
Don't have anyone at hand to play against? Fret not. TryHackMe creates public lobbies daily for you to join. In the meanwhile, there may be others in a similar situation - looking for members to compete against.

![lobby-system](https://i.imgur.com/q0TUfND.png)

If there is a public lobby that is looking for players, you can simply join and become apart of the lobby yourself.

## The Rules of the Game Mode:
To prevent cheating and ensure this game is realistic yet fair to everyone, all players must adhere to the following rules:

 1. The machine assigned to the lobby must not be rendered completely unavailable to other members. For example, this includes **denying all traffic** through firewall rules, terminating **all services that will physically render the machine inoperable.** 
2. No deleting of flags placed throughout the machine.
3. No closing of the port: 9999
4. No Denial of Service (DoS) attacks whatsoever to and from the machine itself nor members of the lobby or any other infrastructure.
5. Whilst the target is launched from a pool of potential machines, we do not want any writeups or hints for this game mode. Do not spoil the nature of the competition for others...
6. No attacking other users.
7. Scripts that automatically hack and/or harden the machine are forbidden.

Lobbies are moderated to ensure fair play where failure to abide by the rules will result in bans within the game mode and/or across the TryHackMe site.

## How to Play
When everyone "readies" within the lobby, you will be provided the IP Address of the machine you all have to compete amongst each other to attack. From now on, you will compete to become **the first King of the Hill**.

After the lobby has started - the time of which you have specified, the **game will last for 60 minutes or 1 Hour.** The member with the most points at the end of the game - regardless of the amount of "King Changes" and the like wins!

### Becoming King
After enumeration and such forth, you will need to add your **TryHackMe Username** to **/root/king.txt or king file in ADMINISTRATOR user's directory(Windows machine)** on the machine itself to become the latest **"King"**.

It is then down to you to prevent your competitors from replacing your **TryHackMe Username** and becoming the new **"King"**, however, you **must follow the rules**.

## How Points are Scored
There are two main methods of obtaining points. However, it should be noted that any points gained throughout the game are not persistent and will not be reflected on your TryHackMe profile - nor the next lobby you join. These two methods are the following:

`"Be King"` The longer you have your TryHackMe Username in the /root/king.txt file, the more points you get. You obtain 10 points every **full-minute** you are the current **"King"**
I.e. to obtain 10 points, you must be the current **"King"** for 60 seconds (1 full-minute). If you are only the king for 50 seconds, you will not be awarded the 10 points, nor will the person who was **"King"** for the remaining 10 seconds of that minute.

`"Submit Flags"` There are multiple entry points to the machine, some will have flags hidden throughout. The difficulty of how the value of the flag is obtained will stipulate the points you obtain for it.
I.e. A harder to reach flag will grant more points then a flag that is easier to obtain.

## Feedback and Reporting Issues
King of the Hill is an entirely new type of content on TryHackMe. Whilst testing has been done, there's always something that will crop-up.

We welcome any and all feedback - be it suggestions to improve the game mode, or any issues you're experiencing on our [feedback](https://tryhackme.com/feedback) page!

## "I Suspect a Player of Cheating"
If you suspect a player of cheating or rule-breaking, email `koth@tryhackme.com` with the **game ID (shown in URL)** and the **Players Username if possible**. We can investigate...
