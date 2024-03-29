import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTsx: boolean;
}

export function buildBabelLoader({ isTsx, isDev }: BuildBabelLoaderProps) {
    const isProd = !isDev;

    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true, // см 104
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],

                    // в зависимости от флага isTsx позволяем работать с TS (подробнее см. доку об этих плагинах)
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTsx,
                        },
                    ],
                    '@babel/plugin-transform-runtime',

                    // удаляем те пропсы, которые не нужны в продакшен сборке
                    isTsx &&
                        isProd && [
                            babelRemovePropsPlugin,
                            {
                                props: ['data-testid'],
                            },
                        ],
                ].filter(Boolean),
            },
        },
    };
}
