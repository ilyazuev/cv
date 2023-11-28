// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ilya Zuev",
  tagline: "more than a Software Developer",
  favicon: "img/photo.png",

  // Set the production url of your site here
  url: "https://ilya.zuev.eu",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ilya zuev", // Usually your GitHub org/user name.
  projectName: "ilya zuev", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "ilya Zuev", // logo: { alt: "My Site Logo", src: "img/logo.svg", },
        items: [
          {
            type: "docSidebar",
            sidebarId: "cv",
            position: "left",
            label: "CV",
          },
        ],
      },
      footer: {
        style: "light", // copyright: `Copyright © 1973 Zuev`, // Copyright © ${new Date().getFullYear()} Zuev. // <a href="/cv/resume/Projects/IBM%20products">Lineage for IBM products and Oracle</a> · <a href="/cv/resume/Projects/Hogrefe%20Testsystem">Hogrefe Testsystem</a>
        links: [
          {},
          {
            title: "Plans & last projects:",
            items: [
              {
                label: "Lineage for IBM products and Oracle",
                to: "/cv/Projects/IBM products",
              },
              {
                label: "Hogrefe Testsystem",
                to: "/cv/Projects/Hogrefe Testsystem",
              },
              {
                label: "Plans",
                to: "/cv/Plans",
              },
            ],
          },
          {},
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
