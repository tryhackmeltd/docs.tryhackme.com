---
id: openvpn-troubleshooting
title: OpenVPN Troubleshooting
sidebar_label: OpenVPN Troubleshooting
---

## Using the THM troubleshooting Script:
[**MuirlandOracle**](https://tryhackme.com/p/MuirlandOracle) has created a handy troubleshooting script for Linux that automates a large portion of the troubleshooting process for you. You can download it from [**TryHackMe's Github**](https://github.com/tryhackme/openvpn-troubleshooting).


## Other Considerations:
As it stands, TryHackMe only supports OpenVPN via UDP. If you are in a country such as Egypt or China where a VPN over UDP is blocked, until TCP is supported, the alternative is to [**deploy your own Kali instance**](https://tryhackme.com/my-machine) in the cloud. This instance is hosted on TryHackMe and is publicly accessible without a VPN connection. 

If you see messages relating to TLS errors, go to [**this OpenVPN article**](https://openvpn.net/faq/tls-error-tls-key-negotiation-failed-to-occur-within-60-seconds-check-your-network-connectivity/).

## Not receiving reverse shells or Metasploit not creating Sessions?
This is most commonly due to incorrect exploit settings within Metasploit / exploit code. This should be the first thing to check. Ensure that you are using your THM IP address as your `lhost` option and the IP address of the instance assigned to you as your `rhosts`.

Another possibility is people connecting via the OpenVPN on their host machine and not through their virtual machine. For example, running Kali Linux in Virtualbox on your Windows 10 PC. Ensure you are connecting via one session on Kali, rather than your Windows 10 PC.

## Intermittent connection (random drop-outs):
This issue usually stems from client-side issues that can be checked using the [**troubleshooting script**](https://github.com/tryhackme/openvpn-troubleshooting). However, look for external factors to OpenVPN as to why you are experiencing issues if this script does not help.

### Checking for external Issues:

1. In this setup, OpenVPN does not route all of your internet traffic through TryHackMe - are you able to connect to external websites like google? If not, this is an issue with your internet service
2. Are you using WiFi? Perhaps there could be interference or distancing issues resulting in a weak signal that would disrupt connectivity.
3. Are you in a country that blocks OpenVPN traffic? (China, Egypt)

Finally, if you are confident that your internet connection is stable, try switching VPN servers via the [**access page**](https://tryhackme.com/access).
