/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "MetAMDB",
  tagline: "Metabolic Atom Mapping Database",
  url: "https://metamdb.github.io/",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "metamdb",
  projectName: "docs",
  themeConfig: {
    navbar: {
      title: "MetAMDB",
      logo: {
        alt: "MetAMDB Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Documentation",
        },
        {
          to: "api",
          position: "left",
          label: "Api",
        },
        {
          href: "https://github.com/CollinStark/metamdb",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} MetAMDB`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: "https://github.com/CollinStark/docs/edit/master/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "redocusaurus",
      {
        debug: Boolean(process.env.DEBUG || process.env.CI),
        specs: [
          {
            spec: "openapi.yaml",
            routePath: "/api/",
          },
        ],
        theme: {
          primaryColor: "#3578e5",
          redocOptions: { hideDownloadButton: true },
        },
      },
    ],
  ],
};
