const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'EasyPoll Wiki',
  tagline: 'EasyPoll Wiki',
  url: 'https://wiki.easypoll.bot/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.svg',
  organizationName: 'easypoll-bot',
  projectName: 'wiki',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'https://easypoll.bot/images/logo.png',
    metadata: [
      {
        name: 'theme-color',
        content: '#00dfee',
      },
      {
        property: 'og:site_name',
        content: 'EasyPoll',
      },
      {
        property: 'og:site',
        content: 'https://wiki.easypoll.bot/',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: '@EasyPollBot',
      },
      {
        name: 'twitter:creator',
        content: '@EasyPollBot',
      },
    ],
    navbar: {
      title: 'EasyPoll Wiki',
      logo: {
        alt: 'EasyPoll Logo',
        src: 'images/logo.svg',
      },
      items: [
        {
          to: 'https://easypoll.bot/',
          label: 'Home',
          position: 'left',
          target: '_self',
        },
        {
          to: 'https://easypoll.bot/commands',
          label: 'Commands',
          position: 'left',
          target: '_self',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Wiki',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Features',
          items: [
            {
              label: 'Home',
              to: 'https://easypoll.bot/',
              target: '_self',
            },
            {
              label: 'Invite',
              to: 'https://easypoll.bot/invite',
              target: '_self',
            },
            {
              label: 'Commands',
              to: 'https://easypoll.bot/commands',
              target: '_self',
            },
            {
              label: 'Vote',
              to: 'https://easypoll.bot/vote',
            },
            /*{
              label: 'Premium',
              to: 'https://easypoll.bot/premium',
              target: '_self'
            },*/
            {
              label: 'Status',
              to: 'https://status.easypoll.bot/',
            },
          ],
        },
        {
          title: 'Get Help',
          items: [
            {
              label: 'FAQ',
              to: 'faq',
            },
            {
              label: 'Wiki',
              to: '/',
            },
            {
              label: 'Join our Discord',
              to: 'https://easypoll.bot/discord',
            },
          ],
        },
        {
          title: 'Find Us Online',
          items: [
            {
              label: 'top.gg',
              to: 'https://top.gg/bot/437618149505105920',
            },
            {
              label: 'discordbotlist.com',
              to: 'https://discordbotlist.com/bots/easypoll',
            },
            {
              label: 'discord.bots.gg',
              to: 'https://discord.bots.gg/bots/437618149505105920',
            },
            {
              label: 'voidbots.net',
              to: 'https://voidbots.net/bot/437618149505105920',
            },
          ],
        },
        {
          title: 'Our Partners',
          items: [
            {
              label: 'DiscordLookup',
              to: 'https://discordlookup.com/',
            },
            {
              label: 'ProHosting24',
              to: 'https://easypoll.bot/partner/prohosting24',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              to: 'https://easypoll.bot/imprint',
              target: '_self',
            },
            {
              label: 'Terms of Service',
              to: 'https://easypoll.bot/terms-of-service',
              target: '_self',
            },
            {
              label: 'Privacy Policy',
              to: 'https://easypoll.bot/privacy-policy',
              target: '_self',
            },
          ],
        },
      ],
      copyright: `&copy; 2018-${new Date().getFullYear()} <b>EasyPoll Bot</b>`,
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
		indexBlog: false,
    }]
  ],
};
