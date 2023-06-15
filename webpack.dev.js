const path = require("path");
const { merge } = require("webpack-merge");
const commonconfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = merge(
  commonconfig,
  (module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      clean: true,
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      historyApiFallback: true,
      port: 3000,
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "React Container UI",
        template: "./public/index.html",
        filename: "./index.html",
        favicon: "./public/favicon.ico",
        manifest: "./public/manifest.json",
        path: "/",
      }),
      new ModuleFederationPlugin({
        name: "mfe_react_container_ui",
        filename: "remoteEntry.js",
        remotes: {},
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          "react-dom": {
            singleton: true,
            eager: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }),
    ],
  })
);
