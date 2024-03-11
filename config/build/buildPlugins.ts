import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'; // https://youtu.be/acAH2_YT6bs?t=7661
import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack, { DefinePlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { type BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev, apiUrl, project } = options;

    const plugins: webpack.WebpackPluginInstance[] = [
        // работа с html
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        // показывает процесс загрузки работы вебпака
        new webpack.ProgressPlugin(),
        // работа с CSS
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // определение и прокидываение глобальных переменных в проект
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        // копирует файлы в определенный каталог
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }),
        // следит за кольцевыми зависимостями
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
        // проверка типов идет в отдельном процессе
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
    ];

    if (isDev) {
        // плагин для включения HMR для компонентов React
        plugins.push(new ReactRefreshWebpackPlugin());
        // HMR
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    if (process.env.ANALYZE) {
        plugins.push(
            // анализатор сборки
            new BundleAnalyzerPlugin({
                openAnalyzer: process.env.ANALYZE === 'dev',
            })
        );
    }

    return plugins;
}
