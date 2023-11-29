module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },
  title: 'effector',
  tagline: 'The state manager',
  url: 'https://v21.effector.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'effector', // Usually your GitHub org/user name.
  projectName: 'effector', // Usually your repo name.
  onBrokenLinks: 'ignore', // Temporal option for smoother transition to multilang docs
  themeConfig: {
    sidebarCollapsible: false,
    image: 'img/comet.png',
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
    },
    navbar: {
      title: 'effector',
      logo: {
        alt: 'effector Logo',
        src: 'img/comet.png',
      },
      items: [
        {to: 'docs/introduction/installation', label: 'Docs', position: 'left'},
        {to: 'docs/api/effector/effector', label: 'API', position: 'left'},
        {
          href: 'https://www.patreon.com/zero_bias',
          label: 'Blog',
          position: 'left',
        },
        {
          href: 'https://share.effector.dev',
          label: 'REPL',
          position: 'left',
        },
        {
          href: 'https://changelog.effector.dev',
          label: 'Changelog',
          position: 'right',
        },
        {
          href: 'https://twitter.com/effectorjs',
          label: 'Twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/effector/effector',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              label: 'v20.17.2',
              href: 'https://v20.effector.dev'
            },
          ],
          dropdownItemsBefore: [
            {
              label: 'v23.x (actual)',
              href: 'https://effector.dev'
            },
            {
              label: 'v22.8.8',
              href: 'https://v22.effector.dev'
            },
          ],
        },
        {
          type: 'localeDropdown',
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
              label: 'Docs',
              to: 'docs/introduction/installation',
            },
            {
              label: 'API',
              to: 'docs/api/effector/effector',
            },
            {
              label: 'Changelog',
              to: 'https://changelog.effector.dev',
            },
            {
              href: 'https://www.patreon.com/zero_bias',
              label: 'Blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'dev.to',
              href: 'https://dev.to/effector',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/effectorjs',
            },
            {
              label: 'Telegram 🇷🇺',
              href: 'https://t.me/effector_ru',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/effector_en',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Github',
              to: 'https://github.com/effector/effector',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCm8PRc_yjz3jXHH0JylVw1Q',
            },
            {
              label: 'Hosted by Netlify',
              href: 'https://netlify.com',
            },
          ],
        },
      ],
      logo: {
        alt: 'effector - the state manager',
        src: 'img/comet.png',
        href: 'https://github.com/effector/effector',
      },
      copyright: `Copyright © 2018-${new Date().getFullYear()} zerobias`,
    },
  },
  scripts: [],
  stylesheets: ['/css/fonts.css'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: './docs',
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: false,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
          remarkPlugins: [],
          versions: {
            current: {
              label: "v21.8.12"
            }
          }
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
