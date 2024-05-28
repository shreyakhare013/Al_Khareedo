/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   eslint:{
//     ignoreDuringBuilds:true,
//   }
// }

// module.exports = nextConfig
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Check if it's the server build, as `self` is not available in Node.js
    if (!isServer) {
      // Define `self` as `global` if it's not already defined
      config.plugins.push(
        new (require('webpack').DefinePlugin)({
          'self': 'global'
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;


