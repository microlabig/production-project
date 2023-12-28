import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { DefinePlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'; // https://youtu.be/acAH2_YT6bs?t=7661
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { type BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev, apiUrl, project } = options;

    const plugins: webpack.WebpackPluginInstance[] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
    ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    if (process.env.ANALYZE) {
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: process.env.ANALYZE === 'dev',
            })
        );
    }

    return plugins;
}
