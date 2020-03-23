/***********************************************************************************************************************
# * Copyright (c) 2018-present, TryHackMe, Ltd.
# *
# * This source code is licensed under the MIT license found in the
# * LICENSE file in the root directory of this source tree.
# *
# * ******** INSTRUCTIONS ********
# * Once you have added or amended the relevant documentation markdown files, and ensured
# * that the sidebars.js file has been updated accordingly, this file can be modified to add/remove
# * the documentation categories listed on the website homepage.
# *
# * Follow the structure that has already been defined, and ensure you increment the ID number of any categories that
# * that you may have added, modified or removed.
# *
# * Please ensure you read the README.md file to adhere to the contribution guidelines.
# *
# * @author Matt Kent (@Matt_Kent9 <Twitter>)
***********************************************************************************************************************/

module.exports = [
  {
    id: 1,
    title: 'General',
    description: 'Just getting started with TryHackMe? Start here for a detailed introduction to our platform.',
    uri: '/docs/general/welcome'
  },
  {
    id: 2,
    title: 'OpenVPN',
    description: 'Guides on setting up, connecting and troubleshooting OpenVPN connections.',
    uri: '/docs/openvpn/why-openvpn'
  },
  {
    id: 3,
    title: 'Completing Rooms',
    description: 'Guides on how to use and complete TryHackMe rooms.',
    uri: '/docs/rooms/what-are-rooms'
  },
  {
    id: 4,
    title: 'Room Creation',
    description: 'How to create your own TryHackMe rooms for training, workshops and assessments.',
    uri: '/docs/room-creation/room-creation-getting-started'
  },
  {
    id: 5,
    title: 'Sales and Billing',
    description: 'Information on sales and billing.',
    uri: '/docs/sales-billing/sales-billing-student'
  },
  {
    id: 6,
    title: 'TryHackMe for Teaching',
    description: 'Guides on managing students, virtual labs and teaching content for Cybersecurity training.',
    uri: '/docs/teaching/teaching-getting-started'
  }
]
