module.exports = {
  publicRuntimeConfig: process.env,
  webpack: (config, { isServer }) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    if (isServer) {
      config.target = 'node';
    } else {
      config.node = {
        fs: 'empty',
      };
    }

    return config;
  },
};
