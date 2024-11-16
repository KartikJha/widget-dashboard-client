const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
    clean: true, // Clean the output directory before build
  },
  mode: 'development', // Set mode to development
  devtool: 'source-map', // Enable source maps for debugging
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Process TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/, // Process JavaScript files
        enforce: 'pre',
        use: ['source-map-loader'], // Process source maps
      },
      {
        test: /\.css$/, // Match .css files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use the HTML template from public/index.html
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from public
    },
    compress: true, // Enable gzip compression
    port: 3000, // Port for the dev server
    hot: true, // Enable Hot Module Replacement (HMR)
    open: true, // Automatically open the browser
  },
};
