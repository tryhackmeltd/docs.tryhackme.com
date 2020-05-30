---
id: openvpn-connecting
title: Connecting With OpenVPN
sidebar_label: Connecting With OpenVPN
---

Firstly, you will need to download the configuration file associated with your account. This is done by visiting the **[TryHackMe "Access" page](https://tryhackme.com/access)**

![Downloading your OpenVPN Config file](https://i.imgur.com/CiEtbrn.png)

Just below, there is a section that has the brief steps, as well as recorded videos showing you the process on both platforms.

![OpenVPN Access Videos](https://i.imgur.com/nt7Uaka.png)

## Connecting via Linux
After OpenVPN is installed and you have retrieved your configuration file, run the command `sudo openvpn --config /directory/to/config.ovpn`. **Please note the importance of using `sudo`**, otherwise you will not be using OpenVPN with administrative privileges and will not be able to connect.

**Make sure you do not close this terminal** - but rather minimise it. Otherwise you will be disconnected from the TryHackMe network.**

## Connecting via Windows
Fortunately, the process is a lot more interactive on Windows. Whilst the videos illustrate the process, I will further highlight the process.

First, you should launch OpenVPN as an administrator such as below:
![Launching OpenVPN](https://i.imgur.com/IHUBuJ2.png)

In the bottom-right corner of your taskbar, you will see a monitor with a padlock symbol. This is the OpenVPN interface, which you will need to **right-click** on to proceed.

To connect, you will need to import your configuration file using **"Import file"** and navigating to the directory of where you have downloaded your OpenVPN configuration file from the **[TryHackMe "Access" page](https://tryhackme.com/access)** to.
![Importing OpenVPN Config](https://i.imgur.com/W6XodWN.png)


Your configuration file will now appear in the OpenVPN interface, with a little arrow indicating a sub-menu, as shown below:
![Running OpenVPN Config](https://i.imgur.com/m1oKDpa.png)

Pressing **"Connect"** will launch a GUI with a bunch of text. After a couple of seconds, a Windows-notification will appear on the bottom-right, stating that your connection was successful.
![Windows Notification Indicating Successful Connection](https://i.imgur.com/qgoQ0A6.png)

## Verifying Connectivity

After approximately 10 seconds after successful connection, you can confirm your connection by returning to the now-populated **[TryHackMe "Access" page](https://tryhackme.com/access)**
![](https://i.imgur.com/Anj2hX8.png)

**The Connected Indicator on the access page is known to be unreliable - Please do not use this to diagnose your OpenVPN issues.** A successful connection with any client will show the following message:
```
DAY MONTH DATE HH:MM:SS YYYY Initialization Sequence Completed
```

## The "OpenVPN" Room
Is a great walkthrough (and nice way to obtain some of your first points) into how to deploy an instance on the TryHackMe network, connect to it and retrieve a flag.

**[You can access it here](https://tryhackme.com/room/openvpn)**
