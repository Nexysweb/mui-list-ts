module.exports = {
  presets: [
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true
      }
    ],
    '@babel/preset-react',
    '@babel/preset-env'
  ],
  plugins: [
    '@babel/plugin-transform-arrow-functions',

    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-modules-commonjs'
    // '@babel/plugin-transform-async-to-generator',
  ]
};
