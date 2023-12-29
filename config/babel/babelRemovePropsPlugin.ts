import { PluginItem } from '@babel/core';

// Babel-плагин удаления пропсов
// урок https://ulbitv.ru/pl/teach/control/lesson/view?id=261028096
// docs: https://babeljs.io/docs/plugins#plugin-development + AstExplorer
export default function babelRemovePropsPlugin(): PluginItem {
    return {
        visitor: {
            // Program - чтобы можно было обрабатывать пропсы
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
