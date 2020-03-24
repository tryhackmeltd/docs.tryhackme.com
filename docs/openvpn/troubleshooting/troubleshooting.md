---  
id: openvpn-troubleshooting
title: OpenVPN Troubleshooting
sidebar_label: OpenVPN Troubleshooting
---

## No Connectivity
This is most likely due to lack of permissions. For example, running OpenVPN on Linux without `sudo`.

### Resolving on Linux:
To resolve, perform the following:

  1. Ensure there is no OpenVPN process running by launching a terminal and entering: <br/>
        `sudo killall openvpn`

  2. Then launch OpenVPN with administrative permissions,     `sudo openvpn <path to config>`

If you find yourself still unable to connect to the TryHackMe network, you will need to recreate your **[OpenVPN Configuration file](https://tryhacke.com/access)**, by pressing the **"Regenerate"** button like in the photo below.

![Regen OpenVPN File](https://i.imgur.com/jCnkADu.png)

After allowing the process to complete, you will now need to redownload this configuration file and connect via the steps outlined in the **[OpenVPN Connection Guide](http://localhost:3000/docs/openvpn/connecting/openvpn-connecting)**

Even after this you still cannot connect, please get in touch with support.


### Resolving on Windows
We have noticed reports of difficulty connecting to the TryHackMe network using OpenVPN on Windows. For example, some users haven't been able to use Zenmap/Nmap against deployed instances whilst being shown as connected.

As a good rule of thumb, the only need to connect to the TryHackMe network is to use tools against instances that are often not supported on Windows. I.e. `netcat` reverse shells. Moreover, WSL even though it is *Linux*, launching OpenVPN as if it were will not work. We encourage the use of Linux as much as possible for compatibility.

  1. Revisit the [OpenVPN Connection Guide for Windows](http://localhost:3000/docs/openvpn/connecting/openvpn-connecting#connecting-via-windows) and ensure you are running as an administrator.


## Intermittent Connection (Random Drop-outs):
This issue usually stems from multiple connections to the TryHackMe network. However, look for external factors to OpenVPN as to why you are experiencing issues first:

### Checking for External Issuses:
  1. In this setup, OpenVPN does not route all of your internet traffic through TryHackMe - are you able to connect to external websites like google?
  2. Are you using WiFi? Perhaps there could be interference or distancing issues resulting in a weak signal that would disrupt connectivity.

### Checking for OpenVPN Issues:
Most errors relating to maintaining connectivity to TryHackMe, despite a good connection otherwsie stems from having multiple sessions (or connections) with OpenVPN.

For a stable connection, **OpenVPN needs to be ran only once**. Otherwise it will start disconnecting/connection between the various sessions. To resolve this, perform the following in a new terminal:

1. Type `ps aux | grep openvpn` into your [linux] terminal and press enter.

2. If there's more than one and the **second entry doesn't have "grep" in it**, perform the following steps:


3. Type `sudo killall openvpn` into your [linux] terminal and press enter.

4. Start the VPN with `sudo openvpn <path-to-config>`
