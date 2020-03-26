/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'General',
      items: [
        'general/welcome',
        'general/what-is-tryhackme',
        'general/why-should-i-join',
        'general/tryhackme-levels'
      ]
    },
    {
      type: 'category',
      label: 'OpenVPN',
      items: [
        'openvpn/why-openvpn',
        {
          type: 'category',
          label: 'Connecting',
          items: [
            'openvpn/connecting/openvpn-installing',
            'openvpn/connecting/openvpn-connecting',
          ]
        },
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'openvpn/troubleshooting/openvpn-troubleshooting',
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Completing Rooms',
      items: [
        'rooms/what-are-rooms',
        'rooms/how-points-work',
        'rooms/accessing-deployed-vms',
        'rooms/room-difficulty-levels',
      ]
    },
    {
      type: 'category',
      label: 'Room Creation',
      items: [
        'room-creation/room-creation-getting-started',
      ]
    },
    {
      type: 'category',
      label: 'Sales and Billing',
      items: [
        'sales-billing/sales-billing-student',
      ]
    },
    {
      type: 'category',
      label: 'Teaching',
      items: [
        'teaching/teaching-getting-started',
      ]
    },
    {
      type: 'category',
      label: 'Discord',
      items: [
        'discord/discord-getting-started',
        'discord/verify',
      ]
    }
  ]
}
