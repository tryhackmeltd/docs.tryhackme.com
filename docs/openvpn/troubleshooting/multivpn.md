---
id: openvpn-troubleshooting-multivpn
title: Multiple VPN Connections
sidebar_label: Multiple VPN Connections
---

Symptoms include:

- Instability in VPN connection

How to fix:

1. Type `ps aux | grep openvpn` into your [linux] terminal and press enter
2. If there's more than one (and the second doesn't have "grep" in it), do the following steps
3. Type `killall openvpn` into your [linux] terminal and press enter
4. Start the VPN with `sudo openvpn <path-to-config>`
