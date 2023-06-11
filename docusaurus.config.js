// @ts-check
const axios = require("axios");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = async function configCreatorAsync() {
  const contact_info = await axios.get(
    "https://raw.githubusercontent.com/dsmtE/dsmtE/main/contact.json"
  ).then((res) => res.data).catch((err) => ({}));

  return {
    title: 'Cours de programmation C++',
    tagline: '',
    url: `https://dsmte.github.io/`,
    baseUrl: '/Learn--cpp_programming/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'imgs/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'dsmtE', // Usually your GitHub org/user name.
    projectName: 'Learn--cpp_programming', // Usually your repo name.

    i18n: {
      defaultLocale: 'fr',
      locales: ['fr'],
    },

    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: "./content",
            routeBasePath: "/",
            sidebarPath: require.resolve('./sidebars.js'),
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    stylesheets: [
      {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
        integrity:
          "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
        crossorigin: "anonymous",
      },
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: '',
          logo: {
            alt: 'Logo',
            src: 'imgs/logo.svg',
          },
          items: [
            {to: '/Lessons', label: 'Cours', position: 'left'},
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              // label: "Discord",
              // to: `https://discord.com/users/${contact_info.discord_user_id}`,
              html: `
              <a href="https://discord.com/users/${contact_info.discord_user_id}" class="footer__link-item">
                <img src="https://api.iconify.design/skill-icons/discord.svg" /> Discord
              </a>
              `,
            },
            {
              label: "E-Mail",
              to: `mailto:${contact_info.email}`,
            },
            {
              // label: "GitHub",
              // to: "https://github.com/dsmtE",
              html: `
              <a href="https://github.com/dsmtE" class="footer__link-item">
                <img src="https://api.iconify.design/skill-icons/github-dark.svg" /> GitHub
              </a>
              `,
            },
          ],

          copyright:
           `These lessons were written by <a href="https://github.com/dsmtE">DE SMET Enguerrand</a> with the help of <a href="https://julesfouchy.github.io/">Jules Fouchy</a><br/>` +
            `Copyright © ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["cmake", "csharp"],
        },
      }),
  };
};

