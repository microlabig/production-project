import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildSassLoader } from '../build/loaders/buildSassLoader';
import { BuildPaths } from '../build/types/config';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

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
            __IS_DEV__: true,
            __API__: '',
            __PROJECT__: 'storybook',
        })
    );

    return config;
};
