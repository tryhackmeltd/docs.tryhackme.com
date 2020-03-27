module.exports = {
  title: 'TryHackMe Documentation',
  tagline: 'Documentation for all TryHackMe resources',
  url: 'https://docs.tryhackme.com',
  baseUrl: '/',
  favicon: 'img/thm-favicon.png',
  organizationName: 'tryhackmeltd', // Usually your GitHub org/user name.
  projectName: 'docs.tryhackme.com', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: 'TryHackMe Documentation',
      logo: {
        alt: 'TryHackMe Logo',
        src: 'img/thm-white.png'
      },
      links: [
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
              href: 'https://discord.gg/YTZwNdF',
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
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        }
      },
    ]
    ]
}
