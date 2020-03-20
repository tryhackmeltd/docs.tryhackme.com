module.exports = {
  title: 'TryHackMe Documentation',
  tagline: 'Documentation for all TryHackMe resources',
  url: 'https://docs.tryhackme.com',
  baseUrl: '/docs.tryhackme.com/',
  favicon: 'img/thm-favicon.png',
  organizationName: 'tryhackmeltd', // Usually your GitHub org/user name.
  projectName: 'docs.tryhackme.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TryHackMe Documentation',
      logo: {
        alt: 'TryHackMe Logo',
        src: 'img/thm-white.png'
      },
      links: [
        {to: 'docs/doc1', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
      },
    ]
    ]
};
