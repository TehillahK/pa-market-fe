const webpack = require("webpack");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}



module.exports = {
  nextConfig,
  images:{
    domains: ['images.unsplash.com',"firebasestorage.googleapis.com","images.pexels.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }))

    // Important: return the modified config
    return config;
  },
  rules: [{
    test: require.resolve('jquery'),
    use: [{
      loader: 'expose-loader',
      options: '$'
    }]
  }],
  presets: ["next/babel"]
};
