/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@zerodevapp", "@web3"],
};

module.exports = {
  images: {
    domains: ['cdn.discordapp.com'],
  },
}

// module.exports = {
//   images: {
//     domains: ['gateway.pinata.cloud'],
//   },
// }

// next.config.js
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'gateway.pinata.cloud',
//         port: '',
//         pathname: '/ipfs/**',
//       },
//     ],
//   },
// }

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.gateway.pinata.cloud',
      },
    ],
  },
}
// next.config.js

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@zerodevapp", "@web3"],
};