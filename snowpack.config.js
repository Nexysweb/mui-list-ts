// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: '/'
  },
  exclude: ['**/*.test.ts', '**/*.test.tsx', 'lib/test/test-utils.tsx'],
  plugins: [
    /* ... */
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }]
};
