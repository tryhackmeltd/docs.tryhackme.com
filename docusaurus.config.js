module.exports = {
  title: 'TryHackMe Documentation',
  tagline: 'Documentation for all TryHackMe resources',
  url: 'https://docs.tryhackme.com',
  baseUrl: '/',
  favicon: 'img/thm-favicon.png',
  organizationName: 'tryhackmeltd', // Usually your GitHub org/user name.
  projectName: 'docs.tryhackme.com', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    algolia: {
      apiKey: 'f6bc764ab829843e80b2e0fbca995f36', // search-only API key (safe for front-end usage)
      indexName: 'tryhackme'
    },
    navbar: {
      title: 'TryHackMe Documentation',
      logo: {
        alt: 'TryHackMe Logo',
        src: 'img/thm-white.png'
      },
      items: [
        {to: 'docs/general/welcome', label: 'Docs', position: 'left'},
        {to: 'https://blog.tryhackme.com', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/tryhackmeltd/docs.tryhackme.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'TryHackMe Website',
              to: 'https://tryhackme.com',
            },
            {
              label: 'Blog',
              to: 'https://blog.tryhackme.com',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/tryhackme',
            },
            {
              label: 'Forums',
              href: 'https://tryhackme.com/forum',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tryhackmeltd/docs.tryhackme.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/RealTryHackMe',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/RealTryHackMe',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TryHackMe, Ltd. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
    ]
}
