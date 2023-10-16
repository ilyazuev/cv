// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
module.exports = {
  title: "ilya Zuev",
  tagline: "more than a Software Developer",
  favicon: "img/photo.png",

  // Set the production url of your site here
  url: "https://ilyazuev.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/cv/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ilya zuev", // Usually your GitHub org/user name.
  projectName: "ilya zuev", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    {
      navbar: {
        title: "ilya Zuev", // logo: { alt: "logo", src: "img/logo.svg", },
        items: [
          {
            type: "docSidebar",
            sidebarId: "resume",
            position: "left",
            label: "Resume",
          },
        ],
      },
      footer: {
        style: "light", // copyright: `Copyright © 1973 Zuev`, // Copyright © ${new Date().getFullYear()} Zuev. // <a href="/cv/resume/Projects/IBM%20products">Lineage for IBM products and Oracle</a> · <a href="/cv/resume/Projects/Hogrefe%20Testsystem">Hogrefe Testsystem</a>
        links: [
          {},
          {
            title: "Last projects:",
            items: [
              {
                label: "Lineage for IBM products and Oracle",
                to: "resume/Projects/IBM%20products",
              },
              {
                label: "Hogrefe Testsystem",
                to: "resume/Projects/Hogrefe%20Testsystem",
              },
            ],
          },
          {},
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};
