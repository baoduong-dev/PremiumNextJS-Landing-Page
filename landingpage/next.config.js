const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextImages = require('next-images');
const nextConfig = {
  reactStrictMode: true,
}
// module.exports = {
  // reactStrictMode: true,
// }
module.exports = withPlugins([optimizedImages, nextImages()], nextConfig);