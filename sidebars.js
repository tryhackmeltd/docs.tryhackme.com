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
      label: 'Introduction',
      items: [
        'introduction/welcome',
        'introduction/what-is-tryhackme',
        'introduction/why-should-i-join'
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        {
          type: 'category',
          label: 'Individual',
          items: [
            'getting-started/individual/creating-an-account',
            'getting-started/individual/openvpn-configuration',
            'getting-started/individual/deploying-your-first-vm'
          ]
        },
        {
          type: 'category',
          label: 'Educational',
          items: [
            'getting-started/educational/creating-an-account',
            'getting-started/educational/openvpn-configuration',
            'getting-started/educational/deploying-your-first-vm'
          ]
        },
        {
          type: 'category',
          label: 'Enterprise',
          items: [
            'getting-started/enterprise/creating-an-account',
            'getting-started/enterprise/openvpn-configuration',
            'getting-started/enterprise/deploying-your-first-vm'
          ]
        },
      ]
    },
    {
      type: 'category',
      label: 'Completing Rooms',
      items: [
        'rooms/introduction-to-rooms',
        'rooms/how-points-work',
        'rooms/accessing-deployed-vms',
        'rooms/room-difficulty-levels',
        'rooms/creating-a-room'
      ]
    }
  ]
}
