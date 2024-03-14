import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTest';
import { ReducersList } from '../../components/DynamicModuleLoader/DynamicModuleLoader';

export interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList; // DeepPartial<ReducersMapObject<StateSchema>>;
}

interface TestProviderInterface {
    children: ReactNode;
    options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderInterface) {
    const { children, options = {} } = props;
    const { route = '/', initialState, asyncReducers } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                // asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
                asyncReducers={asyncReducers}
                initialState={initialState as StateSchema}
            >
                <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
