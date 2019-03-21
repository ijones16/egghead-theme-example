module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://your-site.io', // Domain of your site. No trailing slash!
    title: 'My Blog', // Navigation and Site Title
    twitterHandle: '@eggheadio', // Twitter Username
    description: 'This is where they post things!',
    keywords: ['Video Blogger'],
    canonicalUrl: 'https://your-site.io',
    image: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
    author: {
      name: 'Author',
      minibio: `
        <strong>egghead</strong> is the premier place on the internet for
        experienced developers to enhance their skills and stay current
        in the fast-faced field of web development.
      `,
    },
    organization: {
      name: 'egghead.io LLC',
      url: 'https://your-site.io', // Domain of your site. No trailing slash!
      logo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
    },
    social: {
      twitter: '@eggheadio', // Twitter Username
      twitterUrl: 'https://twitter.com/eggheadio/',
      githubUrl: 'https://github.com/eggheadio/',
      linkedinUrl: '',
      fbAppID: '',
    },
  },
  __experimentalThemes: ['@eggheadio/gatsby-theme-egghead-blog'],
}
