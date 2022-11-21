const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = [
    {
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.m?[jt]sx?$/,
                    exclude: /node_modules/,
                    use: {loader: "babel-loader"},
                },
            ],
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".wasm"],
        },
        entry: "./src/federated",
        output: {
            filename: "remote-widget-federated.js",
            path: path.resolve(__dirname, "dist"),
        },
        plugins: [
            new ModuleFederationPlugin({
                name: "remote_widget",
                filename: "remote-widget.js",
                exposes: {
                    "./remote-widget": "./src/remote-widget"
                },
                shared: ["react", "react-dom"],
            }),
        ],
    },
];
