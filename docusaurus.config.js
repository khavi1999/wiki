const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'EasyPoll Documentation',
  tagline: 'EasyPoll Documentation',
  url: 'https://docs.easypoll.me',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.svg',
  organizationName: 'easypoll-bot',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: 'EasyPoll Documentation',
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
              to: 'https://easypoll.me/',
            },
            {
              label: 'Add Bot to Server',
              to: 'https://easypoll.me/invite',
            },
            {
              label: 'Support',
              to: 'https://easypoll.me/discord',
            },
            /*{
              label: 'Status Page',
              to: '',
            },*/
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/easypoll-bot/',
            },
            {
              label: 'Discord',
              href: 'https://easypoll.me/discord',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              to: 'https://easypoll.me/imprint-content.php',
            },
            {
              label: 'Privacy Policy',
              to: 'https://easypoll.me/privacy-content.php',
            },
            /*{
              label: 'Terms of Service',
              to: '#',
            },*/
          ],
        },
      ],
      copyright: `&copy; ${new Date().getFullYear()} EasyPoll Bot`,
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
          editUrl: 'https://github.com/easypoll-bot/docs/edit/main/',
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
};
