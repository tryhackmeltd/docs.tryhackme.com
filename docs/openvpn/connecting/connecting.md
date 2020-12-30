---
id: openvpn-connecting
title: Connecting With OpenVPN
sidebar_label: Connecting With OpenVPN
---

## How do I get Started?
We have a [**room dedicated to helping**](https://tryhackme.com/room/openvpn) you install the lightweight software that is needed to connect you to our network. The room visualises the install process for the operating system of your choice!

However, if you're familiar with OpenVPN, we recommend visiting a room and clicking the "Get Connected" button on the top navigation bar, which outlines the same process in a concise manner.

![Getting Connected](https://i.imgur.com/6KS0GoD.png)

## I'm a subscriber, how do I use the in-browser Kali Machine?
Subscribers have access to a [**Kali machine**](https://tryhackme.com/my-machine) hosted in the cloud for your convenience. Bring hacking to your browser, wherever you are, no setup required!


## The "Access" Page:
![The Access Page](https://i.imgur.com/CYWJmzj.png)
The access page is the reference point for anything TryHackMe VPN related.  Hopefully you will only have to visit this once to download your TryHackMe configuration file for OpenVPN! However, it is one of the first port of calls in managing your TryHackMe VPN and troubleshooting.

### Choosing VPN Server:
TryHackMe has multiple VPN servers placed throughout various geographic regions to help keep your ping low and connection stable. At the time of writing, TryHackMe has the following:

| Server Name  | Region  |
|---|---|
| EU-Regular-1  | Europe  |
| EU-Regular-2  | Europe  |
| EU-VIP-1  | Europe  |
| US-West-Regular-1  | United States - West Coast  |
| US-East-Regular-1  | United States - East Coast  |
| AU-Regular-1  | Australia  |

At times there may be lots of concurrent users on the site which is why some regions such as EU have two regular servers for load balancing.

## Verifying Connectivity:

Upon successful connection, OpenVPN will produce a message such as the one below:
```
DAY MONTH DATE HH:MM:SS YYYY Initialization Sequence Completed
```

If you have any doubts as to whether or not you are connected, deploy the instance attached to  <a href="https://tryhackme.com/room/openvpn">**[Task 6] Check you're connected**</a> in the OpenVPN room. After a few minutes, you will be able to visit the IP address of the instance assigned to you in your browser.

![Deploy OpenVPN room](https://i.imgur.com/QI2JRXh.png)

The IP address that you need to visit will be different to that within the screenshot above.

You should see the following in the browser of the device that you are connecting from. If so, you are connected! If not, refer to <a href="https://docs.tryhackme.com/docs/openvpn/troubleshooting/openvpn-troubleshooting">**the troubleshooting page**</a> for additional guidance.

![Confirming Connectivity](https://i.imgur.com/Zd2f7jK.png)

### OpenVPN errors & Troubleshooting:
Configuration files have been known the generate with formatting issues. OpenVPN will fail with an error similar to the following if yours has been generated with errors:
```
Mon Jun 15 22:28:35 2020 Cannot load inline certificate file
Mon Jun 15 22:28:35 2020 Exiting due to fatal error
```
To fix this, switch VPN servers and press "Regenerate". For example, if you were on **EU-Regular-1** then you should swap to **EU-Regular-2** and press "Regenerate" like below:


![Regenerating OpenVPN onfiguration File](https://i.imgur.com/uQ8L7jX.png)

Please wait at least 10 seconds before pressing "Download My Configuration File". This will allow enough time for a new configuration file to be generated for you. After downloading, I suggest renaming and appending a `2` to the end to ensure you connect with this file in the future.
![Renaming new Configuration File](https://i.imgur.com/ENFOZLh.png)

If you have issues that do not relate to your config file, check out the [**troubleshooting page**](https://docs.tryhackme.com/docs/openvpn/troubleshooting/openvpn-troubleshooting) for more guidance.
