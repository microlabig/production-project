import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildSassLoader } from './loaders/buildSassLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    // Если не используем тайпскрипт - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = buildSassLoader(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2?|ttf)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, scssLoader];
}
