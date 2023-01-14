const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    // Gotcha: Initially, I did this, which could be okay.
    // However, once we add in the example app, it breaks storybook.
    // '../**/*.stories.@(js|jsx|ts|tsx)',
    // '../**/story.@(js|jsx|ts|tsx)'
    '../src/**/story.@(js|jsx|ts|tsx)' // Added This
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',

  // This is added automatically when using npx sb init --builder webpack5
  // See this document if you are migrating an older version of Storybook
  // https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5
  core: {
    builder: '@storybook/builder-webpack5'
  },

  webpackFinal: async (config) => {
    ///////////////////////////////////////////////////////////////////////////
    //
    // https://github.com/storybookjs/storybook/issues/15335
    // When initializing Storybook with npx sb init --builder webpack5
    // there was a bunch of issues ModuleParseError and ModuleNotFoundError.
    // These all seemed to be related to preview.cjs
    // This fixes it. Supposedly, the issue will be fixed in storybook 7.0
    //
    ///////////////////////////////////////////////////////////////////////////
    config.module.rules.push({
      test: /\.(c?js)$/,
      type: 'javascript/auto',
      resolve: { fullySpecified: false }
    })
    ///////////////////////////////////////////////////////////////////////////
    //
    // https://github.com/alexeagleson/template-react-component-library/blob/master/package.json
    // When I look at the Alex Eagleson repo, he is using these versions:
    //
    //   "css-loader": "^6.5.1",
    //   "sass-loader": "^12.3.0",
    //   "style-loader": "^3.3.1",
    //
    // He's also using the npx sb init --builder webpack5 implementation, which is probably
    // why those loader versions work.
    //
    // I'm also using the storybook webpack 5 build and the most recent version of the loaders.
    //
    //   "css-loader": "^6.7.3",
    //   "sass-loader": "^13.2.0",
    //   "style-loader": "^3.3.1"
    //
    // https://storybook.js.org/docs/react/builders/webpack
    // When configuring sass, DO NOT use the use a plugin/preset.
    // They are almost all super old. Instead just do this.
    //
    ///////////////////////////////////////////////////////////////////////////
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    })
    return config
  }
}
