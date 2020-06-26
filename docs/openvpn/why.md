---
id: why-openvpn
title: Why do I Need OpenVPN?
sidebar_label: Why do I Need OpenVPN?
---

The TryHackMe platform is ran through a cloud-based environment. Due to the fact that the large majority of the deployable content on the platform is of vulnerable Virtual Machines (VMs), they are placed into an isolated network away from the wider-internet. OpenVPN connects you to this isolated network so that you are able to access the instance assigned to you.

Note, if you are a subscriber, TryHackMe provides already-connected instances of [**Kali Linux**](https://tryhackme.com/my-machine), removing the need to use OpenVPN. These non-persistent instances can be interacted with via the following means:

1.  Directly within your Browser
2.  Remote Desktop Protocol (RDP) (I.e. Remmina for Linux, or Microsoft's RDP client if using Windows)
3.  SSH (Secure Socket Shell)