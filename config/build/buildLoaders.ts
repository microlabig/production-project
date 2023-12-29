// import ReactRefreshTypeScript from 'react-refresh-typescript';
import type webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildSassLoader } from './loaders/buildSassLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { type BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;

    const svgLoader = buildSvgLoader();

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    // Если не используем тайпскрипт - нужен babel-loader
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     exclude: /node_modules/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
    //                 }),
    //                 // transpileOnly: isDev, // https://github.com/TypeStrong/ts-loader#transpileonly, https://youtu.be/acAH2_YT6bs?t=7373
    //             },
    //         },
    //     ],
    // };

    const scssLoader = buildSassLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2?|ttf)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        svgLoader,
        fileLoader,
        codeBabelLoader,
        tsxBabelLoader,
        //  typescriptLoader,
        scssLoader,
    ];
}
