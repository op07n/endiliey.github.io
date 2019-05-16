const siteConfig = {
  title: 'op07n Y',
  tagline: 'I love building things',
  url: 'https://op07n.github.io',
  baseUrl: '/',
  projectName: 'op07n.github.io',
  organizationName: 'op07n',
  themeConfig: {
    headerLinks: [
      {href: 'https://forum.op07n.com', label: 'Forum'},
      {href: 'https://github.com/op07n', label: 'GitHub'},
    ],
    },
  },
  headerIcon: 'img/endilie.gif',
  favicon: 'img/endilie.gif',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          path: './blog',
          routeBasePath: '/',
        },
      },
    ],
  ],
};

module.exports = siteConfig;
