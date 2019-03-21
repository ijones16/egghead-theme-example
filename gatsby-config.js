const config = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/blog your pathPrefix should be "blog"
  siteTitle: 'My Blog', // Navigation and Site Title
  siteTitleAlt: 'The blog of an egghead creator', // Alternative Site title for SEO
  siteTitleShort: 'Starter Blog', // short_name for manifest
  siteUrl: 'https://your-site.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription: 'This is where they post things!',
  author: 'Author', // Author for schemaORGJSONLD
  organization: 'egghead.io LLC',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@eggheadio', // Twitter Username
  ogSiteName: 'egghead.io Gatsby Starter Blog', // Facebook Site Name
  ogLanguage: 'en_US',
  googleAnalyticsID: '',

  // Manifest and Progress color
  themeColor: '#5348FF',
  backgroundColor: '#2b2e3c',

  // Social component
  twitter: 'https://twitter.com/eggheadio/',
  twitterHandle: '@eggheadio',
  github: 'https://github.com/eggheadio/',
  linkedin: '',
}
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    twitterHandle: config.twitterHandle,
    description: config.siteDescription,
    keywords: ['Video Blogger'],
    canonicalUrl: config.siteUrl,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: `
        <strong>egghead</strong> is the premier place on the internet for
        experienced developers to enhance their skills and stay current
        in the fast-faced field of web development.
      `,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
    social: {
      twitter: config.twitterHandle,
      twitterUrl: config.twitter,
      githubUrl: config.github,
      linkedinUrl: config.linkedin,
      fbAppID: '',
    },
  },
  __experimentalThemes: ['@eggheadio/gatsby-theme-egghead-blog'],
}
