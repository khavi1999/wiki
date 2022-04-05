const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'EasyPoll Wiki',
  tagline: 'EasyPoll Wiki',
  url: 'https://easypoll.bot/wiki/',
  baseUrl: '/wiki/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.svg',
  organizationName: 'easypoll-bot',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'EasyPoll Wiki',
      logo: {
        alt: 'EasyPoll Logo',
        src: 'images/logo.svg',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'EasyPoll',
          items: [
            {
              label: 'Home',
              to: 'https://easypoll.bot/',
            },
            {
              label: 'Add Bot to Server',
              to: 'https://easypoll.bot/invite',
            },
            {
              label: 'Support',
              to: 'https://easypoll.bot/discord',
            },
            {
              label: 'Commands',
              to: 'https://easypoll.bot/commands',
            },
            /*{
              label: 'Premium',
              to: 'https://easypoll.bot/premium',
            },*/
            {
              label: 'Status',
              to: 'https://easypoll.bot/status',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/easypoll-bot',
            },
            {
              label: 'Discord',
              href: 'https://easypoll.bot/discord',
            },
          ],
        },
        {
          title: 'Find Us Online',
          items: [
            {
              label: 'top.gg',
              href: 'https://top.gg/bot/437618149505105920',
            },
            {
              label: 'discordbotlist.com',
              href: 'https://discordbotlist.com/bots/easypoll',
            },
            {
              label: 'discord.bots.gg',
              href: 'https://discord.bots.gg/bots/437618149505105920',
            },
            {
              label: 'voidbots.net',
              href: 'https://voidbots.net/bot/437618149505105920',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              to: 'https://easypoll.bot/imprint',
            },
            {
              label: 'Terms of Service',
              to: 'https://easypoll.bot/terms-of-service',
            },
            {
              label: 'Privacy Policy',
              to: 'https://easypoll.bot/privacy-policy',
            },
          ],
        },
      ],
      copyright: `&copy; 2018-${new Date().getFullYear()} EasyPoll Bot`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/easypoll-bot/wiki/edit/main/',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
		indexDocs: true,
		docsRouteBasePath: '/',
		indexBlog: false,
    }]
  ],
  scripts: [
    {
      src: '/js/custom.js',
    },
    {
      src: '/wiki/js/custom.js',
    },
  ],
};
