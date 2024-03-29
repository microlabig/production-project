import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';

import { buildSassLoader } from '../build/loaders/buildSassLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        locales: '',
        buildLocales: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
    config.resolve!.alias = { ...config.resolve!.alias, '@': paths.src };

    if (config.module?.rules) {
        config.module.rules = config.module.rules.map((rule: RuleSetRule | '...') => {
            // дефолтный лоадер от storybook для обработки файлов svg пропускаем
            // и ниже после цикла будем использовать свой
            if (typeof rule === 'object' && rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
                return { ...rule, exclude: /\.svg$/ };
            }

            return rule;
        });
        config.module?.rules?.push(buildSvgLoader());
        config.module?.rules?.push(buildSassLoader(true));
    }

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('http://localhost:8000'),
            __PROJECT__: JSON.stringify('storybook'),
        })
    );

    return config;
};
