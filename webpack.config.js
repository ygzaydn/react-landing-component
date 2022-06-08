const path = require("path");

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
        libraryTarget: "commonjs2",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    externals: {
        react: "commonjs react",
    },
};
