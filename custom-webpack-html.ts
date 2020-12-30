// (async () => {
// const fetchPromise = fetch('node_modules/buttplug-wasm/dist/web/61e4105dac859589a376.module.wasm');
// const { instance } = await WebAssembly.instantiateStreaming(fetchPromise);

// WASM stuff
// If using typescript, uncomment this declare line
// var __webpack_public_path__;
// var scripts = document.getElementsByTagName("script"); // there is no document yet
// var lastScript = scripts[scripts.length - 1].src;
// __webpack_public_path__ = lastScript.substr(0, lastScript.lastIndexOf('/') + 1);
// var newPath = lastScript.substr(0, lastScript.lastIndexOf('/') + 1);

// output: {
//     path: path.resolve('./dist'),
//     publicPath: '/app/dist/',
//     filename: 'build.js'
// }
// console.log(__webpack_public_path__);
// console.log('instance', instance);

// from docs
// {
//     output: {
//         publicPath: '/'
//     }
// }

// https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack#example-2
// import { TargetOptions } from '@angular-builders/custom-webpack';

// export default (targetOptions: TargetOptions, indexHtml: string) => {
//   const i = indexHtml.indexOf('</body>');
//   const config = `<p>Configuration: ${targetOptions.configuration}</p>`;
//   return `${indexHtml.slice(0, i)}
//             ${config}
//             ${indexHtml.slice(i)}`;
// };

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const path = require('path');
// var webpackConfig = {
//     // entry: {
//     //     main: './src/main.ts'
//     // }, resolve: {
//     //     extensions: ['.ts', '.js']
//     // },
//     output: {
//         filename: 'bundle.js',
//         path: path.join(__dirname, 'src', 'dist'),
//     },
//     // module: {
//     //     rules: [{
//     //         test: /\.ts$/,
//     //         use: ['ts-loader', 'angular2-template-loader']
//     //     },
//     //     {
//     //         test: /\.html$/,
//     //         use: 'html-loader'
//     //     },
//     //     {
//     //         test: /\.css$/,
//     //         use: [
//     //             'to-string-loader', 'css-loader',
//     //         ],
//     //     },
//     //     ]
//     // },
//     // devServer: {
//     //   writeToDisk: true
//     // },
// };
// const htmlWebpackPlugin = new HtmlWebpackPlugin({
//     template: './src/index.html',
// });
// webpackConfig.plugins = [
//     htmlWebpackPlugin,
// ];
// module.exports = webpackConfig;
console.log('custom index transform config');
