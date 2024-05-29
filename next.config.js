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
  env:{
    SANITY_API_KEY: process.env.SANITY_API_KEY,
  }

}
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        module: false,
        child_process: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
//};

module.exports = nextConfig;


