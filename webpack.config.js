const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');

const PostCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        [
          'autoprefixer',
          {
            Browserslist: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
          }
        ]
      ]
    }
  }
};


const client = (env, argv) => {
  const styleLoader = MiniCssExtractPlugin.loader;
  return {
    name: 'client',
    entry: path.resolve(__dirname, 'client/src/index.js'),
    output: {
      publicPath: '/',
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build/client')
    },
    resolve: {
      modules: [path.resolve(__dirname, './client'), 'node_modules'],
      alias: {
        api: path.resolve(__dirname, './client/src/api/'),
        components: path.resolve(__dirname, './client/src/components/'),
        helpers: path.resolve(__dirname, './client/src/helpers/'),
        pages: path.resolve(__dirname, './client/src/pages/'),
        validation: path.resolve(__dirname, './validation/')
      }
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      hot: true,
      proxy: {
        '/api': {
          target: 'http://localhost:8000'
        }
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'client/public/index.html'),
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(woff|woff2|ttf|eot|jpe?g|png|gif|svg|mp4$|ogv$|webm$)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'src/'
          }
        },
        {
          test: /\.css$/i,
          use: [
            styleLoader,
            'css-loader',
            PostCSSLoader
          ]
        }
      ]
    }
  };
};

const server = (env, argv) => {
  return {
    name: 'server',
    entry: path.resolve(__dirname, 'server/index.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build/server')
    },
    resolve: {
      modules: [path.resolve(__dirname, './server'), 'node_modules'],
      alias: {
        controlers: path.resolve(__dirname, './server/controlers/'),
        models: path.resolve(__dirname, './server/models/'),
        validation: path.resolve(__dirname, './validation/')
      }
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
      __dirname: false,
      __filename: false
    },
    plugins: [
      new NodemonPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };
};

// Alias
module.exports = {
  resolve: {
    alias: {
      CPublic: path.resolve(__dirname, '/client/public/'),
      CApi: path.resolve(__dirname, '/client/src/api/'),
      CComponents: path.resolve(__dirname, '/client/src/components/'),
      CHelpers$: path.resolve(__dirname, '/client/src/helpers/index.js'),
      CPages: path.resolve(__dirname, '/client/src/pages/'),
      PSignIn: path.resolve(__dirname, '/client/src/pages/SignIn/'),
      PSignUp: path.resolve(__dirname, '/client/src/pages/SignUp/'),
      CRouter: path.resolve(__dirname, '/client/src/router/'),
      SControlers: path.resolve(__dirname, '/server/controlers/'),
      SDb: path.resolve(__dirname, '/server/db/'),
      SMiddlewares: path.resolve(__dirname, '/server/middlewares/'),
      SModels: path.resolve(__dirname, '/server/models/'),
      SRouter: path.resolve(__dirname, '/server/router/'),
      Validation: path.resolve(__dirname, '/validation/')
    }
  }
};

module.exports = [client, server];
